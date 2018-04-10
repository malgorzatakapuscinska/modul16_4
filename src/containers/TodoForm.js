import React from 'react';

const FormFortodo = (props) => {
	console.log(props);
	return (
		<form>
			<label htmlFor = {'text'}>Write a task to add</label>
			<input 
				id={'text'}
				type={'text'}
				value={props.input}/>
			<input type={'submit'}/>
		</form>
	);
	
}

class TodoForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			input: '',
		}
	}
	
	handleChange(event) {
		let input = this.event.target.value;
		console.log('input value: ' + input);
		this.setState({input: input});
		console.log(this.state.input);
	}
	
	handleSubmit() {
		this.preventDefault();
		const value = this.state.input;
		this.props.addTodo(value);
		console.log(this.props.addTodo);
	}
	
	render() {
		return (
			<FormFortodo onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)} input={this.state.input}></FormFortodo>
		);
	}
}

export default TodoForm;