import { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "./ExpensesFilter.js";
import Card from "../UI/Cards.js";
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
      {filteredExpenses.length === 0 ? }
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
