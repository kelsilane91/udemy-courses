import React, { ReactNode } from "react";
import styles from "./Card.module.css";

type PropType = {
  children: ReactNode;
  className?: any;
};
const Card = ({ children, className }: PropType) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
