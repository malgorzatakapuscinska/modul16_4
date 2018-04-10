import React from 'react';
import uuid from 'uuid';
import ReactDOM from 'react-dom';
import style from './App.css';
import Title from '../components/Title';
import TodoList from './TodoList';



const startData = [{
	id: 1,
	text: 'clean room'
}, {
	id: 2,
	text: 'wash the dishes'
}, {
	id: 3,
	text: 'feed my cat'
}];

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: startData,
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    
    removeToDo(id){
    	const remainder = this.state.data.filter((todo) => todo.id !== id); //filter returns array that contains all todo except todo with id that function get as parameter
    	this.state({data: remainder});
    }
    
    render(){
    	return (
    		<div className={style.TodoApp}>
    			<Title title="ToDo App" number={this.state.data.length}></Title>
    			<TodoList todoItems={this.state.data} removeTodo={this.removeTodo}></TodoList>
    		</div>
    	);
    }
}

export default App;