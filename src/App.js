import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './features/todo/todoSlice';

function App() {
  const isDarkMode = useSelector(state => state.todo.isDarkMode);
  const dispatch = useDispatch();

  return (
    <div className={`App ${isDarkMode ? 'dark-theme' : ''}`}>
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Todo App</h1>
          <button 
            className="theme-toggle"
            onClick={() => dispatch(toggleTheme())}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <svg className="theme-icon sun" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0 1.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-16c.4 0 .8.3.8.8v1.4c0 .4-.3.8-.8.8s-.8-.3-.8-.8V3.8c0-.5.3-.8.8-.8Zm0 14c-.4 0-.8.3-.8.8v1.4c0 .4.3.8.8.8s.8-.3.8-.8v-1.4c0-.5-.3-.8-.8-.8ZM3.8 12c0-.4.3-.8.8-.8h1.4c.4 0 .8.3.8.8s-.3.8-.8.8H4.6c-.5 0-.8-.3-.8-.8Zm14 0c0-.4.3-.8.8-.8h1.4c.4 0 .8.3.8.8s-.3.8-.8.8h-1.4c-.5 0-.8-.3-.8-.8Zm-2-5.2c.3-.3.7-.3 1 0l1 1c.3.3.3.7 0 1-.3.3-.7.3-1 0l-1-1c-.3-.3-.3-.7 0-1Zm-10.4 8.4c.3-.3.7-.3 1 0l1 1c.3.3.3.7 0 1-.3.3-.7.3-1 0l-1-1c-.3-.3-.3-.7 0-1Zm8.4 2c-.3-.3-.3-.7 0-1l1-1c.3-.3.7-.3 1 0 .3.3.3.7 0 1l-1 1c-.3.3-.7.3-1 0Zm-8.4-10.4c-.3-.3-.3-.7 0-1l1-1c.3-.3.7-.3 1 0 .3.3.3.7 0 1l-1 1c-.3.3-.7.3-1 0Z" fill="currentColor"/>
              </svg>
            ) : (
              <svg className="theme-icon moon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" fill="currentColor"/>
              </svg>
            )}
          </button>
        </div>
      </header>
      <div className="container">
        <div className="content-section">
          <AddTodo />
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
