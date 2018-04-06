import React from 'react';
import uuid from 'uuid';
import ReactDOM from 'react-dom';
import style from './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
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
    			Tutaj pojawią się nasze komponenty.
    		</div>
    	);
    }
}

export default App;