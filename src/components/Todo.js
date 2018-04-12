import React from 'react';
import style from './Todo.css';

const Todo = (props) => {
	console.log(props);
	console.log(props.todo.text);
	console.log(props.remove);
	console.log(props.todo.id);
	return (
		<li className={style.Todo}>
			<a href={'#'}>
				<p>{props.todo.text}</p>
				<button onClick={() => props.remove(props.todo.id)}>x</button>
			</a>
		</li>
	);
}

export default Todo;

