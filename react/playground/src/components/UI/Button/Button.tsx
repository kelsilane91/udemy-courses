import React, { ReactNode } from "react";

import classes from "./Button.module.css";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: ReactNode;
  className: string;
  disabled: boolean;
};
const Button = ({ type, onClick, children, className, disabled }: Props) => {
  return (
    <button
      type={type || "button"}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
