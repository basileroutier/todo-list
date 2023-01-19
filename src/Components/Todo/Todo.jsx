import { Component } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

class Todo extends Component{
    constructor(props) {
        super(props);
        this.state = {
          todos: [{name: "Faire les courses"}, {name: "Faire la vaisselle"}],
        }
    }
    
    addTodo = (newTodo) => {
        const todos = [...this.state.todos, newTodo]
        this.setState({todos});
    };
    
    render() {
        return (
          <div>
            <TodoAdd addTodo={this.addTodo} />
            <TodoList todos={this.state.todos} />
          </div>
        )
    }
}

export default Todo;