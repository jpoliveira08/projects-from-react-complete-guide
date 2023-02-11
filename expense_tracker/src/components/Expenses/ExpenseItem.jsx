import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
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
