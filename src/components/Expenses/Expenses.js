import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <>
      {props.expenses.map((expense) => (
        <Card className="expenses" key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </Card>
      ))}
    </>
  );
}

export default Expenses;
