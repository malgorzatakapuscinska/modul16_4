import React from 'react';

const Todo = (props) => {
	console.log(props);
	console.log(props.todo.text);
	console.log(props.remove);
	console.log(props.todo.id);
	return (
		<li>
			<a href={'#'}>
				<p>{props.todo.text}</p>
				<button onClick={() => props.remove(props.todo.id)}>x</button>
			</a>
		</li>
	);
}

export default Todo;

