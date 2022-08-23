import { Task } from "../types/Task";
import Section from "./Section";
import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";

type Props = {
  items: Task[];
  loading: boolean;
  error: any;
  onFetch: () => void;
};
const Tasks = ({ items, onFetch, error, loading }: Props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (items.length > 0) {
    taskList = (
      <ul>
        {items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (error != null) {
    console.log('error', error)
    content = <button onClick={onFetch}>Try again</button>;
  }

  if (loading) {
    content = <p>"Loading tasks..."</p>;
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
