import { useState, useEffect } from "react";
import './App.css';
import UserCard from "./UserCard";
import usersData from './users.json';
import groupIcon from './assets/group.svg';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // No need to fetch the JSON file as it's already imported as 'usersData'
        setUsers(usersData);
      } catch (error) {
        console.log(error);
        setUsers([]);
      }
    })();
  }, []);

  return (
    <> <div className="navbar">
    <img src={groupIcon} alt="Group Icon" className="navbar__icon" />
    <h1 className="navbar__heading">USERS</h1>
  </div>
    <div className="cards-container">
      {users.map((user, index) => (
        <UserCard key={index} userData={user} />
      ))}
    </div>
    </>
  );
}

export default App;
