import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import User from "./User";

function Main(props) {
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
            <div className="card">
							{props.view === 'grid' ? 
                <UserCard key={index} user={user} />
								:
								<User key={index} user={user} />
							}
            </div>
        ))}
      </div>
    </div>
  );
}

export default Main;