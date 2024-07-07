import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();
const dbCString = process.env.SUPABASE_URL; // `${process.env.SUPABASE_URL}?client_id=${process.env.SUPABASE_KEY}`;
export const db = new pg.Pool({
  connectionString: dbCString,
});

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

app.get("/", (req, res) => {
  res.json({ Reply: "Root route successfully tested!" });
});

app.get("/posts", async (req, res) => {
  //const results = await db.query(`SELECT * AS _posts FROM posts UNION SELECT * FROM username WHERE id = _posts.user_id`);
  const results = await db.query(
    `SELECT * FROM posts INNER JOIN username ON posts.user_id = username.id`
  );
  res.json(results.rows);
});

app.get("/posts/:user_id", async (req, res) => {
  const user_id = req.params[`user_id`];
  const results = await db.query(
    `SELECT * FROM posts WHERE user_id = ${user_id} `
  );
  res.json(results.rows);
});

app.post("/posts", async (req, res) => {
  const { title, content, category_id, user } = req.body;
  const result = await db.query(
    `SELECT * FROM username WHERE username.username = $1`,
    [user]
  );
  let user_id;
  if (result.rows.length == 0) {
    const user_result = await db.query(
      `INSERT INTO username (username) VALUES ($1) RETURNING id `,
      [user]
    );
    user_id = user_result.rows[0].id;
  } else {
    user_id = result.rows[0].id;
  }
  try {
    await db.query(
      `
    INSERT INTO posts (title, content, category_id, user_id)
    VALUES  ($1, $2, $3, $4)
    `,
      [title, content, category_id, user_id]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("You have failed to submit!", error);
    res.status(500).json({ success: false });
  }
});

app.get("/users", async (req, res) => {
  const results = await db.query(`SELECT * FROM username`);
  res.json(results.rows);
});

app.get("/users/:user_id", async (req, res) => {
  const user_id = req.params[`user_id`];
  const results = await db.query(
    `SELECT * FROM username WHERE id = ${user_id} `
  );
  res.json(results.rows);
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
