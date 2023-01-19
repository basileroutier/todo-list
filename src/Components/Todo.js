import React, { useState } from "react";
import "./Todo.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleNewTodoChange(e) {
    setNewTodo(e.target.value);
    console.log(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function handleDeleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Nouvelle tâche"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button type="button" onClick={() => handleDeleteTodo(index)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default TodoList;
