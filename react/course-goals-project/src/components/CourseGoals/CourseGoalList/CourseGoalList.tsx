import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import styles from "./CourseGoalList.module.css";

type Props = {
  items: {
    id: string;
    text: string;
  }[];
  onDeleteItem: (id: string) => void;
};
const CourseGoalList = ({ items, onDeleteItem }: Props) => {
  return (
    <ul className={styles["goal-list"]}>
      {items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
