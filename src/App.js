import React, { useState } from 'react';
import './styles/App.css';

// Import components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoVal, setTodoItem] = useState("");

  const createTodoItem = (todoItem) => {
    setTodoList(todoList.concat(todoItem));
    setTodoItem("");
  }

  return (
    <div className="App">
      <header>
        <h1>TO-DO</h1>
      </header>
      <div className="container">
        <TodoForm todoVal={todoVal} setTodoItem={setTodoItem} createTodoItem={createTodoItem} />
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
}

export default App;
