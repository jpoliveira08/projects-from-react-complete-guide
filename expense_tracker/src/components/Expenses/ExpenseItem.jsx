// Working with states, for this we have to import 'useState' library
// Allow us to define values as state, where changes to these values
// Should reflect in the component function being called again 
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // Using useState, should be inside the component function
  const [title, setTitle] = useState(props.title);

  // Convention for those function, if trigger with an event you should end with 'handler'
  const clickHandler = () => {
    setTitle("Updated!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;

/*
{} curly braces - inside the jsx code runs Javascript expression
*/

/*
Working with props
Where we are using the Component, we can pass 'parameters'
like attibutes, ex.: <Component attribute={javascript.value}></Component>
The data is passed in only one parameter in the function declaration,
like function Component(props)
*/

/*
Is consider a good practice dont put logic in the JSX code
*/

/*
All these event handler props in react, want a function as a value
and the function should be called without parenthesis '()'
*/