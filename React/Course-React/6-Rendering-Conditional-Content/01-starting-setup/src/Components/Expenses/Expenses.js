import { useState } from "react";
import Card from "../UI/Cards.js";
import ExpenseFilter from "./ExpensesFilter.js";
import ExpenseList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
