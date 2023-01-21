import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  var [filtereredExpenseValue, setFiltereredExpenseValue] = useState("");

  const expenseFilter = (value) => {
    setFiltereredExpenseValue(value);
  };

  const filteredExpensesArr = props.expenses.filter((expense) => {
    return (
      "" + expense.date.getFullYear() === filtereredExpenseValue ||
      filtereredExpenseValue === "Select" ||
      filtereredExpenseValue === ""
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        filtereredExpenseValue={filtereredExpenseValue}
        expenseFilter={expenseFilter}
      />
      <ExpensesList
        filteredExpensesArr={filteredExpensesArr}
        filtereredExpenseValue={filtereredExpenseValue}
      />
    </Card>
  );
}

export default Expenses;
