import React from "react";
import { User } from "../../types/User";
import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";
type Props = {
  users: User[];
};
const UserList = ({ users }: Props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
