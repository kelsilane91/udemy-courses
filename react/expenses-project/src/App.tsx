import React, { useState } from "react";
import { expenseData } from "./data/expenseData";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { Expense } from "./types/Expense";
import Chart from "./components/Chart/Chart";
const App = () => {
  const [data, setData] = useState(expenseData);

  const addExpenseHandler = (expense: Expense) => {
    setData((prevData: any) => {
      return [...prevData, expense];
    });
  };

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses expenseData={data} />
    </div>
  );
};

export default App;
