import React, { ReactNode, memo } from "react";

import classes from "./Button.module.css";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};
const Button = ({ type, onClick, children, className, disabled }: Props) => {
  console.log("button running");
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

export default memo(Button);
