import React, { useState } from "react";
import { Expense } from "../../types/Expense";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
type PropType = {
  expenseData: Expense[];
};
const Expenses = ({ expenseData }: PropType) => {
  const [selectedYear, setSelectedYear] = useState<string>("2022");

  const filteredData = expenseData.filter((expense: Expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  const onFilterEvent = (filteredYear: string) => {
    setSelectedYear(filteredYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        filterExpense={onFilterEvent}
      ></ExpensesFilter>
      <ExpensesChart filteredExpenses={filteredData} />
      <ExpensesList items={filteredData}></ExpensesList>
    </Card>
  );
};

export default Expenses;
