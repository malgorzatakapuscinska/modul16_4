import React from 'react';

const Title = (props) => {
	return (
	<div>
		<h1>{props.title}</h1>
		<p>Number of todo tasks: {props.number}</p>
	</div>
	);
	
}

export default Title;