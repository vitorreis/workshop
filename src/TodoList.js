/**
 * This component should render the TodoItems inside a <li>
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(this.renderChild)}
      </ul>
    );
  }

  renderChild(item, index) {
    return (
      <li key={index}>
        <TodoItem {...item} />
      </li>
    );
  }
};

export default TodoList;
