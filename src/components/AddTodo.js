import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import './AddTodo.css';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div className="add-todo-container">
      <form onSubmit={addTodoHandler} className="add-todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="add-todo-input"
        />
        <button type="submit" className="add-todo-button">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTodo;