import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  var [filtereredExpenseValue, setFiltereredExpenseValue] = useState("");

  const expenseFilter = (value) => {
    setFiltereredExpenseValue(value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        filtereredExpenseValue={filtereredExpenseValue}
        expenseFilter={expenseFilter}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          filter={filtereredExpenseValue}
        />
      ))}
    </Card>
  );
}

export default Expenses;
