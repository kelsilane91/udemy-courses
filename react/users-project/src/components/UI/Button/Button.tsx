import React, { ReactNode } from "react";

import styles from "./Button.module.css";
type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: ReactNode;
};

const Button = ({ type, children, onClick }: Props) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
