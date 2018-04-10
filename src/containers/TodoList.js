import React from 'react';
import Todo from '../components/Todo';

class TodoList extends React.Component{
	constructor(props){
		super(props);
	}
	
	get todoItems() {
		console.log(this.props.todoItems);
		return this.props.todoItems.map(todo => <Todo key={todo.id} text={todo.text} remove={this.props.removeTodo}/>)
	}
	
	render() {
		return (
			<ul>
				{this.todoItems}
			</ul>
		);
	} 
}

export default TodoList;