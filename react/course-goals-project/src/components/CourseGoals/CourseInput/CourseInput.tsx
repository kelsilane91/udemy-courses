import React, { BaseSyntheticEvent, useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

type Props = {
  onAddGoal: (enteredValue: string) => void;
};
const CourseInput = ({ onAddGoal }: Props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event: BaseSyntheticEvent) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
