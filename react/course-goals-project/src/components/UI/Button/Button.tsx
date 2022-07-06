import React, { ReactNode } from "react";

import "./Button.css";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: ReactNode;
};
const Button = ({ type, children, onClick }: Props) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
