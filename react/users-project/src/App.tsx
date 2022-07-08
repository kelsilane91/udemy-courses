import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import { User } from "./types/User";
import { userData } from "./data/Users";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState(userData);

  const handleSubmit = (userData: User) => {
    setUsers((prevUsers: User[]) => {
      return [...prevUsers, userData];
    });
  };

  return (
    <>
      <AddUser handleSubmit={handleSubmit}></AddUser>
      <UserList users={users}></UserList>
    </>
  );
}

export default App;
