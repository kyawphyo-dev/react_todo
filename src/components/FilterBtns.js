import React from "react";

export default function FilterBtns() {
  return (
    <div>
      <div>
        <button className="button filter-button filter-button-active">
          All
        </button>
        <button className="button filter-button">Active</button>
        <button className="button filter-button">Completed</button>
      </div>
    </div>
  );
}
