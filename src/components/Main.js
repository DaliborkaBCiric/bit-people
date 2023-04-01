import React, { useState, useEffect } from "react";
import User from "./User";
import UserCard from "./UserCard";

function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="container">
        <div className="cards">
        {users.map((user, index) => (
            <div class="card">
                <UserCard key={index} user={user} />
            </div>
        ))}
      </div>
    </div>
  );
}

export default Main;