import React from "react";

export default function TodoForm() {
  return (
    <div>
      <form action="#">
        <input
          type="text"
          className="todo-input"
          placeholder="What do you need to do?"
        />
      </form>
    </div>
  );
}
