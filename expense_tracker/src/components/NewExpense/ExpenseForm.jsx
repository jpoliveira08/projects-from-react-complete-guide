import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // You can hve multiple states in a component

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //Child to parent communication
    props.onSaveExpenseData(expenseData);

    // Reset the value (using two way binding) after form submit
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
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

/*
Whenever you update state and you depende on the previous state
you should not update like this:
...userInput
enteredTitle: event.target.value

You should update like this:
setUserInput((prevState) => {
    return {...prevState, enteredTitle: event.target.value}
})
*/

/*
## Important ##
When updating some state based on its previous value, 
you should use pass a function to the state updating function
*/

/*
## Two way binding ##
For inputs we don't just listen to changes, but we can also
pass a new value back into the input.
Ex. of use: Reset or change the input programmatically
*/
