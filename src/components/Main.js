import React, { useState, useEffect } from "react";
import User from "./User";

function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="container">
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
}

export default Main;