import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // Multiple States
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  // One State instead of multiple states
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // Approach 1, In many cases, both will work fine, but react schedules state updates, it doesn't perform them instantly
    // Therefore if u schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot if we use this approach
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // Approach 2, React will guarantee that the state snapshot it gives you here in this inner function, will always will be the latest state snapshot, keeping all scheduled state updates in mind
    // This the safer approach(way) to ensure that you always operate on the latest state snapchot.
    // You should use this function syntax here whenever your state update depends on the previous state.
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHanlder = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHanlder}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
