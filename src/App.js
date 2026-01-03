import "./reset.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CheckAllandRemaining from "./components/CheckAllandRemaining";
import FilterBtns from "./components/FilterBtns";
import ClearCompletedBtn from "./components/ClearCompletedBtn";

function App() {
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm />

        <TodoList />

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
