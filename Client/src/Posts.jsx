import { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the server
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='Container'>
      
      <h1 className='pagetitle'>Posts</h1>
      {posts.length > 0 ? (
        <div className='post-area' >
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <div className='post-content'>
               <div className="post-title">{post.title}</div>
               <div className='flex-row'>
               <div className="username">User: {post.username}</div>
               <div className="category">Category: {post.category_id}</div>
               </div>
               <div className="content">{post.content}</div>  
              </div>
            </li>
          ))}
        </ul>
        </div>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Posts;
