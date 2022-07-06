import React from "react";
import "./Card.css";

type PropType = {
  children: any;
  className: any;
};
const Card = ({ children, className }: PropType) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
