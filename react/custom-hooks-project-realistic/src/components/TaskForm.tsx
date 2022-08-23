import { BaseSyntheticEvent, useRef } from "react";

import classes from "./TaskForm.module.css";

type Props = {
  onEnterTask: (enteredValue: string) => void;
  loading: boolean;
};
const TaskForm = ({ onEnterTask, loading }: Props) => {
  const taskInputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current
      ? taskInputRef.current.value
      : null;

    if (enteredValue && enteredValue.trim().length > 0) {
      onEnterTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
