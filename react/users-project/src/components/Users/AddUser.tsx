import React, { BaseSyntheticEvent, useState } from "react";
import { User } from "../../types/User";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import styles from "./AddUser.module.css";
type Props = {
  handleSubmit: (userData: User) => void;
};
const AddUser = ({ handleSubmit }: Props) => {
  const [error, setError] = useState({
    message: "",
    title: "",
    hasError: false,
  });
  const [formData, setFormData] = useState<User>({ name: "", age: "" });
  const nameInputHandler = (event: BaseSyntheticEvent) => {
    setFormData((previousState: User) => {
      return { ...previousState, name: event.target.value };
    });
  };

  const ageInputHandler = (event: BaseSyntheticEvent) => {
    setFormData((previousState: User) => {
      return { ...previousState, age: event.target.value };
    });
  };

  const formSubmitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (formData.name.trim().length === 0 || formData.age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
        hasError: true,
      });
      return;
    }
    if (+formData.age <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
        hasError: true,
      });
      return;
    }
    handleSubmit(formData);
    setFormData({
      name: "",
      age: "",
    });
  };

  const errorHandler = () => {
    setError({
      message: "",
      title: "",
      hasError: false,
    });
  };

  return (
    <>
      {error.hasError && (
        <ErrorModal
          message={error.message}
          title={error.title}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      {!error.hasError && (
        <Card className={styles.input}>
          <form onSubmit={formSubmitHandler}>
            <label htmlFor="name">Username</label>
            <input
              id="name"
              type="text"
              onChange={nameInputHandler}
              value={formData.name}
            />

            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              onChange={ageInputHandler}
              value={formData.age}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      )}
    </>
  );
};

export default AddUser;
