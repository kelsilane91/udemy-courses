import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import { User } from "./types/User";
import { userData } from "./data/Users";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState(userData);

  console.log(users);
  const handleSubmit = (userData: User) => {
    console.log("submit!", userData);
    setUsers((prevUsers: User[]) => {
      return [...prevUsers, userData];
    });
  };

  return (
    <div>
      <AddUser handleSubmit={handleSubmit}></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
