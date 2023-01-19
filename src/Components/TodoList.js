import { Component } from "react";
import React from "react";

class TodoList extends Component {

    constructor() {
        super()
        this.state = {
            elements: []
        }
    }

    addElement(val) {
        this.setState({
            elements: [...this.state.elements, {id: this.state.elements.length, value: val}]
        })
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <ul id="todoList">
                    {this.state.elements.map(element => <li key={element.id}>{element.value}</li>)}
                </ul>
                <input type="text" id="todoInput" />
                <button onClick={() => this.addElement(document.getElementById("todoInput").value)}>Add</button>
            </div>
        )
    }

}

export default TodoList;