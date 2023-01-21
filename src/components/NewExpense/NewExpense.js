import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const hideExpenseForm = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          addExpenseForm={props.addExpenseForm}
          hideExpenseForm={hideExpenseForm}
        />
      ) : (
        <button type="submit" onClick={() => setShowExpenseForm(true)}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
