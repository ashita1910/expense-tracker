import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (title !== "" && amount !== "" && date !== "") {
      const values = {
        title: title,
        amount: amount,
        date: new Date(date),
      };
      props.addExpenseForm(values);
      setTitle("");
      setAmount("");
      setDate("");
    }
    props.hideExpenseForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event?.target?.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(event?.target?.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(event) => setDate(event?.target?.value)}
          />
        </div>
        <div className="new-expense__actions">
          <button onClick={() => props.hideExpenseForm()}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
