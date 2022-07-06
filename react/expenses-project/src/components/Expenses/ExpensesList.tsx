import React from "react";
import { Expense } from "../../types/Expense";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import "./ExpensesList.css";
type PropType = {
  items: Expense[];
};
const ExpensesList = ({ items }: PropType) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense: Expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
