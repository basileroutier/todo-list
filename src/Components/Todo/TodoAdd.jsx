import { Component } from "react";

class TodoAdd extends Component{
    constructor(props) {
        super(props);
        this.state = {
          todoName: '',
        }
      }
    
    handleInputChange = (event) => {
        this.setState({ todoName: event.target.value });
    }
    
    handleAddTodo = () => {
        this.props.addTodo(this.addTodo());
        this.setState({ todoName: '' });
    }

    addTodo(){
        return {
            name: this.state.todoName,
        }
    }

    render() {
        return (
          <div>
            <input value={this.state.todoName} onChange={this.handleInputChange} />
            <button onClick={this.handleAddTodo}>Ajouter</button>
          </div>
        )
    }
}

export default TodoAdd;