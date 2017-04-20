/**
 * This component should render a todo item as an <input type="checkbox" /> with a label
 */
import React, { Component } from 'react';

const TodoItem = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={props.checked}
        readOnly={true} />
      {props.text}
    </label>
  );
};

export default TodoItem;
