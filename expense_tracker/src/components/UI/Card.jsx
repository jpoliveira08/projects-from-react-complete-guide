import React from 'react';

import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className

    return <div className={classes}>{props.children}</div>
}

export default Card;

/*
You cant use your custom components as wrappers around other kind of content,
like: <Component1>
        <Component2 />
        <p>Hello Word!</p>
      </Component1>
But In React we can using the props.children in the definition of Component1 root
function A(props) {
  return <div>{props.children}</div>
}
So the this will make de code above works
*/

/*
If you wanna make sure that a class name can be set
on your card component and then HAS an effect

You'll have to get the className and add into your return statment too
*/