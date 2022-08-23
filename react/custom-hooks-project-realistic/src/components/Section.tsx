import { ReactNode } from "react";
import classes from "./Section.module.css";

type Props = {
  children: ReactNode;
};
const Section = ({ children }: Props) => {
  return <section className={classes.section}>{children}</section>;
};

export default Section;
