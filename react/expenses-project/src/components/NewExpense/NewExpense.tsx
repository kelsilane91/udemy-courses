import React, { useState } from "react";
import { Expense } from "../../types/Expense";
import ExpenseForm, { FormData } from "./ExpenseForm";
import "./NewExpense.css";
type Props = {
  addExpenseHandler: (expenseData: Expense) => void;
  // onCancel: () => {};
};
const NewExpense = ({ addExpenseHandler }: Props) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  const onSaveExpenseData = (formData: FormData) => {
    const expenseData = {
      ...formData,
      amount: Number(formData.amount),
      date: new Date(formData.date),
      id: Math.random().toString(),
    };
    addExpenseHandler(expenseData);
  };

  const onCancel = () => {
    setIsFormDisplayed(false);
  };

  const onAddNewExpense = () => {
    setIsFormDisplayed(true);
  };

  return (
    <div className="new-expense">
      {!isFormDisplayed && (
        <button onClick={onAddNewExpense}>Add New Expense</button>
      )}
      {isFormDisplayed && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onCancel={onCancel}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
