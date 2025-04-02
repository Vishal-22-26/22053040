import React, { useEffect, useState } from "react";
import axios from "axios";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(response => setUsers(response.data.topUsers))
      .catch(error => console.error("Error fetching top users:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-2">
            {user.name} - {user.postCount} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
