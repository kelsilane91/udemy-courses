import React, { ReactNode } from "react";

import styles from "./CourseGoalItem.module.css";

type Props = {
  id: string;
  onDelete: (id: string) => void;
  children: ReactNode;
};
const CourseGoalItem = ({ id, onDelete, children }: Props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className={styles["goal-item"]} onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
