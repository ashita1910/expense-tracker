import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm addExpenseForm={props.addExpenseForm} />
    </div>
  );
};

export default NewExpense;
