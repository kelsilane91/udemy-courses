import React from "react";
import { Expense } from "../../types/Expense";
import Chart from "../Chart/Chart";

type Props = {
  filteredExpenses: Expense[];
};
const ExpensesChart = ({ filteredExpenses }: Props) => {
  let chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (let expense of filteredExpenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart chartDataPoints={chartDataPoints}></Chart>;
};

export default ExpensesChart;
