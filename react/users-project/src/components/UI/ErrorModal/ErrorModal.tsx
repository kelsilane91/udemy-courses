import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.css";

type Props = {
  onConfirm: () => void;
  message: string;
  title: string;
};
const ErrorModal = ({ onConfirm, message, title }: Props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
