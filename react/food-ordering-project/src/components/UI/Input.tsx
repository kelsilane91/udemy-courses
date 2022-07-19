import { forwardRef, Ref } from "react";
import classes from "./Input.module.css";

type Props = {
  input: any;
  label: string;
};
const Input = forwardRef(({ input, label }: Props, ref: Ref<any>) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
