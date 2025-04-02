import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts?type=latest")
      .then(response => setPosts(response.data.posts))
      .catch(error => console.error("Error fetching latest feed:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-2">
            {post.content} - {new Date(post.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
