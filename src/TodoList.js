/**
 * This component should manage the todo items, letting users check existing ones and add new ones
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: props.items,
			value: ''
		};
	}

	render() {
		return (
			<div>
				{this.renderList()}
				{this.renderForm()}
			</div>
		)
	}

	renderList() {
		return (
			<ul>
				{this.state.items.map((item, index) => (
					<li key={index}>
						<TodoItem text={item.text}
											checked={item.checked}
											onClick={this.checkItem} />
					</li>
				))}
			</ul>
		);
	}

	renderForm() {
		return (
			<form onSubmit={this.addItem}>
				<TodoInput 	value={this.state.value}
										onChange={this.changeValue} />
			</form>
		);
	}

	addItem = (event) => {
		event.preventDefault();
		this.setState({
			items: [
				...this.state.items,
				{
					checked: false,
					text: this.state.value
				}
			],
			value: ''
		});
	}

	checkItem = (text) => {
		this.setState({
			items: this.state.items.map((item) => {
				if (text === item.text) {
					return {
						...item,
						checked: !item.checked
					};
				} else {
					return item;
				}
			})
		});
	}

	changeValue = (event) => {
		this.setState({
			value: event.target.value
		});
	}

	handleClick = (event) => {
		console.log('handle click', event);
		// this.setState({
		// 	checked: !this.state.checked
		// });
	}
}

export default TodoList;
