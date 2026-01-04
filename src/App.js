import "./reset.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CheckAllandRemaining from "./components/CheckAllandRemaining";
import FilterBtns from "./components/FilterBtns";
import ClearCompletedBtn from "./components/ClearCompletedBtn";
import { useEffect, useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((todos) => setTodos(todos));
  });
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm />

        <TodoList todos={todos} />

        <CheckAllandRemaining />

        <div className="other-buttons-container">
          <FilterBtns />

          <ClearCompletedBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
