import "./reset.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CheckAllandRemaining from "./components/CheckAllandRemaining";
import FilterBtns from "./components/FilterBtns";
import ClearCompletedBtn from "./components/ClearCompletedBtn";
import { useCallback, useEffect, useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);
  let [filteredTodos, setFilteredTodos] = useState(todos);

  //fetch todos from the server
  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
        setFilteredTodos(todos);
      });
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

  //Delete Feature
  let deleteTodo = (id) => {
    //delete from server
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    });
    //delete from state
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  //Update Feature
  let updateTodo = (newTodo) => {
    //update on server
    fetch(`http://localhost:3001/todos/${newTodo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    //update on state
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === newTodo.id ? newTodo : todo;
      });
    });
  };
  //Checkall feature
  let checkAll = () => {
    //update on server
    todos.forEach((todo) => {
      todo.completed = true;
      updateTodo(todo);
    });
    //update on state
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return { ...todo, completed: true };
      });
    });
  };

  let remainingCount = todos.filter((todo) => !todo.completed).length;

  //Clear completed feature
  let clearCompleted = () => {
    //delete from server
    todos.forEach((todo) => {
      if (todo.completed) {
        deleteTodo(todo.id);
      }
    });
    //delete from state
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return !todo.completed;
      });
    });
  };

  //check feature
  // let check = (id) => {
  //   //update on server

  //   //update on state
  //   setTodos((prevState) => {
  //     // eslint-disable-next-line array-callback-return
  //     return prevState.map((todo) => {
  //       return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
  //     });
  //   });
  // };

  //Filter
  let filterBy = useCallback(
    (filter) => {
      if (filter === "All") {
        setFilteredTodos(todos);
      } else if (filter === "Active") {
        setFilteredTodos(todos.filter((t) => !t.completed));
      } else if (filter === "Completed") {
        setFilteredTodos(todos.filter((t) => t.completed));
      }
    },
    [todos]
  );
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />

        <CheckAllandRemaining
          remainingCount={remainingCount}
          checkAll={checkAll}
        />

        <div className="other-buttons-container">
          <FilterBtns filterBy={filterBy} />

          <ClearCompletedBtn clearCompleted={clearCompleted} />
        </div>
      </div>
    </div>
  );
}

export default App;
