import axios from "axios";
import { useState } from "react";

const MakePosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState(1);
  const [user, setUser] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      title,
      content,
      category_id: categoryId,
      user,
    };

    try {
      const response = await axios.post("https://assignment-week-07-server.onrender.com", postData);
      if (response.data.success) {
        alert("Post created successfully!");
      } else {
        alert("Failed to Post Message" + response.data.message);
      }
    } catch (error) {
      console.error("error:", error);
      alert("Failed to create post: " + error.message);
    }
  };

  return (
    <div>
      <div>
        <h1 className="pagetitle">Post Page</h1>
        <p>Welcome to the Post Page! Here you can create a new post.</p>
      </div>
      <div>
        <h1>Create a Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              maxLength={49}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              
                <option value={1}>Casual</option>
                <option value={2}>General</option>
                <option value={3}>LFG</option>
                <option value={4}>Recommendations</option>
            </select>
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      
    </div>
  );
};

export default MakePosts;
