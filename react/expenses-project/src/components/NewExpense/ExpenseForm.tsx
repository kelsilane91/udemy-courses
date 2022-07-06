import React, { BaseSyntheticEvent, useState } from "react";
import "./ExpenseForm.css";

export type FormData = {
  title: string;
  amount: string;
  date: string;
};

type Props = {
  onSaveExpenseData: (formData: FormData) => void;
  onCancel: () => void;
};
const ExpenseForm = ({ onSaveExpenseData, onCancel }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    amount: "",
    date: "",
  });
  const titleChangeHandler = (event: BaseSyntheticEvent) => {
    setFormData((prevFormState: FormData) => {
      return {
        ...prevFormState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event: BaseSyntheticEvent) => {
    setFormData((prevFormState: FormData) => {
      return {
        ...prevFormState,
        amount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event: BaseSyntheticEvent) => {
    setFormData((prevFormState: FormData) => {
      return {
        ...prevFormState,
        date: event.target.value,
      };
    });
  };

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    onSaveExpenseData(formData);
    setFormData({
      amount: "",
      title: "",
      date: "",
    });
  };

  const pressCancelButton = () => {
    onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={formData.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={formData.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={pressCancelButton}> Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
