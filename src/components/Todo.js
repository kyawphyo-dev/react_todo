import React, { useState } from "react";

export default function Todo({ todo, deleteTodo, updateTodo }) {
  let [isEdit, setIsEdit] = useState(false);
  let [title, setTitle] = useState(todo.title);
  let handleUpdate = (e) => {
    e.preventDefault();
    let newTodo = {
      id: todo.id,
      title: title,
      completed: todo.completed,
    };
    updateTodo(newTodo);
    setIsEdit(false);
  };

  return (
    <li className="todo-item-container">
      <div className="todo-item">
        <input type="checkbox" />
        {!isEdit && (
          <span
            onDoubleClick={() => setIsEdit(true)}
            className={`todo-item-label ${
              todo.completed ? "line-through" : ""
            }`}
          >
            {todo.title}
          </span>
        )}
        {isEdit && (
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              value={title}
              className="todo-edit-input"
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
        )}
      </div>
      {!isEdit && (
        <button className="edit-button" onClick={() => setIsEdit(true)}>
          <svg
            className="edit-button-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536M9 11l6.232-6.232a2.5 2.5 0 013.536 3.536L12.536 14.536a4 4 0 01-1.414.94L8 16l.524-3.122a4 4 0 01.94-1.414z"
            />
          </svg>
        </button>
      )}

      <button className="x-button" onClick={() => deleteTodo(todo.id)}>
        <svg
          className="x-button-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
}
