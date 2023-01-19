import React, {Component} from "react";
import TodoCard from "./TodoCard"

class TodoList extends Component{

    constructor(props){
        super(props);
    }

    createCard(key,task){
        return (
            <li key={key}><TodoCard name={task.name} /></li>
        )
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map((task, index) => this.createCard(index, task))}
                </ul>
            </div>
        )
    }
}

export default TodoList
