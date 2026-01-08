import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  let [title, setTitle] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    //post the new todo to the server
    if (!title.trim()) return;

    const todo = {
      title: title.trim(),
      completed: false,
    };
    addTodo(todo);
    //clear the input field
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What do you need to do?"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </form>
    </div>
  );
}
