import React, {
  BaseSyntheticEvent,
  HTMLInputTypeAttribute,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Ref } from "react";
import classes from "./Input.module.css";

type Props = {
  isValid: boolean;
  label: string;
  id: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (event: BaseSyntheticEvent) => void;
  onBlur: () => void;
};
const Input = forwardRef(
  (
    { isValid, label, value, id, type, onChange, onBlur }: Props,
    ref: Ref<any>
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const focus = () => {
      inputRef.current?.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus,
      };
    });

    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
