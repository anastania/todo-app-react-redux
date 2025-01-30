# Todo App with React and Redux

A modern, responsive Todo application built with React and Redux, featuring a beautiful UI with dark/light theme support.

## Features

- ✨ Create, read, update, and delete todos
- 📝 Add descriptions to todos
- 🌓 Dark/Light theme toggle
- 💫 Smooth animations and transitions
- 📱 Responsive design
- 🎨 Modern UI inspired by Atlassian's design

## Technologies Used

- React
- Redux Toolkit
- CSS3 with modern animations
- React Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `build` folder.

## Project Structure

```
src/
  ├── app/
  │   └── store.js          # Redux store configuration
  ├── components/
  │   ├── AddTodo.js        # Add todo form component
  │   ├── AddTodo.css
  │   ├── Todos.js          # Todo list component
  │   ├── Todos.css
  │   └── TodoDescription.css
  ├── features/
  │   └── todo/
  │       └── todoSlice.js  # Redux slice for todos
  ├── App.js                # Main app component
  ├── App.css
  └── index.js
```

## License

MIT
