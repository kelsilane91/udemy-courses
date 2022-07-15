import React, { ReactNode } from "react";

import classes from "./Button.module.css";

type Props = {
  className: string;
  children: ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  disabled: boolean;
};
const Button = ({ className, children, onClick, type, disabled }: Props) => {
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
