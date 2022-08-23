import { ReactNode } from "react";
import classes from "./TaskItem.module.css";

type Props = {
  children: ReactNode;
};
const TaskItem = ({ children }: Props) => {
  return <li className={classes.task}>{children}</li>;
};

export default TaskItem;
