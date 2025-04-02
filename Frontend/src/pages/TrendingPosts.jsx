import React, { useEffect, useState } from "react";
import axios from "axios";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts?type=popular")
      .then(response => setPosts(response.data.posts))
      .catch(error => console.error("Error fetching trending posts:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-2">
            {post.content} - {post.commentCount} comments
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
