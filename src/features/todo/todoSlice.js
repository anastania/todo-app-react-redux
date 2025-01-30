import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    isDarkMode: false
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                description: '',
                showDescription: false
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateDescription: (state, action) => {
            const { id, description } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.description = description;
            }
        },
        toggleDescription: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.showDescription = !todo.showDescription;
            }
        },
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
        }
    }
});

export const { addTodo, removeTodo, updateDescription, toggleDescription, toggleTheme } = todoSlice.actions;
export default todoSlice.reducer;