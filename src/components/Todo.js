import React from 'react';

const Todo = (props) => {
	console.log(props);
	console.log(props.todo.text);
	console.log(props.remove);
	<li>
		<p>{props.todo.text}</p>
		<button onclick={props.remove}>x</button>
	</li>
}

export default Todo;

