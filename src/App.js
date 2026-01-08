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

  //fetch todos from the server
  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((todos) => setTodos(todos));
  }, []);

  //function to add a new todo
  let addTodo = (todo) => {
    //post the new todo to the server
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    //update the state
    setTodos((prevTodos) => [...prevTodos, todo]);
  };
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />

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
