/**
 * This component should render the TodoItems inside a <li>
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
         return (
           <li key={item.name}>
            <TodoItem
                      checked={item.checked}
                      text={item.text} />
          </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
