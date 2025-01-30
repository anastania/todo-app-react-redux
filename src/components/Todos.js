import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateDescription, toggleDescription } from '../features/todo/todoSlice';
import './Todos.css';
import './TodoDescription.css';

function Todos() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  const [editingDescription, setEditingDescription] = useState('');

  const handleDescriptionSave = (id) => {
    dispatch(updateDescription({ id, description: editingDescription }));
    dispatch(toggleDescription(id));
  };

  const handleDescriptionClick = (todo) => {
    setEditingDescription(todo.description);
    dispatch(toggleDescription(todo.id));
  };

  return (
    <div className="todos-container">
      <div className="todos-header">
        <h2 className="todos-title">Tasks</h2>
        <span className="todos-count">{todos?.length || 0} tasks</span>
      </div>
      <ul className="todos-list">
        {todos && todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div className="todo-main">
              <div className="todo-checkbox" />
              <div className="todo-content">
                <span className="todo-text">{todo.text}</span>
                {todo.description && (
                  <p className="todo-description">{todo.description}</p>
                )}
              </div>
            </div>
            <div className="todo-actions">
              <button
                className={`description-icon ${todo.description ? 'has-description' : ''}`}
                onClick={() => handleDescriptionClick(todo)}
                title={todo.description ? 'Edit description' : 'Add description'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" fill="currentColor"/>
                </svg>
              </button>
              <button
                className="delete-button"
                onClick={() => dispatch(removeTodo(todo.id))}
                title="Delete task"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
                </svg>
              </button>
            </div>
            {todo.showDescription && (
              <div className="description-popup">
                <textarea
                  value={editingDescription}
                  onChange={(e) => setEditingDescription(e.target.value)}
                  placeholder="Add a description..."
                  rows={3}
                />
                <div className="description-actions">
                  <button onClick={() => handleDescriptionSave(todo.id)}>Save</button>
                  <button onClick={() => dispatch(toggleDescription(todo.id))}>Cancel</button>
                </div>
              </div>
            )}
          </li>
        ))}
        {(!todos || todos.length === 0) && (
          <li className="todo-item" style={{ justifyContent: 'center', color: '#6B778C' }}>
            No tasks yet. Add one above!
          </li>
        )}
      </ul>
    </div>
  );
}

export default Todos;