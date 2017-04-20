/**
 * This component should render a controlled input for text
 */
import React, { Component } from 'react';

class TodoInput extends Component {
	render() {
		return (
      <input
        onChange={this.props.onChange}
        type="text"
        value={this.props.value} />
		)
	}
}

export default TodoInput;
