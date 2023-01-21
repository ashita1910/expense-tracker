import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.filteredExpensesArr.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found!</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.filteredExpensesArr.map((expense) => (
          <li key={expense.id}>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              filter={props.filtereredExpenseValue}
            />
          </li>
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
