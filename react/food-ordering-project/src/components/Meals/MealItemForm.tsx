import { BaseSyntheticEvent, useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

type Props = {
  id: string;
  onAddToCart: (amout: number) => void;
};
const MealItemForm = ({ id, onAddToCart }: Props) => {
  const [amountIsValid, setAmountIsValid] = useState<boolean>(true);
  const amountInputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const enteredAmount = amountInputRef?.current?.value;
    const enteredAmountNumber = +enteredAmount!;

    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
