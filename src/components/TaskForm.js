import React from "react";
import { useState } from "react/cjs/react.development";

export const TaskForm = ({ taskName, taskCategory, addTask }) => {

  const [name, setName] = useState(taskName);
  const [category, setCategory] = useState(taskCategory);

  const createTask = () => {
      let task = {};
      task.name = name;
      task.category = category;
      task.time = 0;
      addTask(task);
  }

  return (
    <>
      <form>
        <label className="name-input-label" htmlFor="name">
          Name
          <input
            type="text"
            className="name-input"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder={name}
          ></input>
        </label>
        <label className="category-input-label" htmlFor="name">
          Category
          <input
            type="text"
            className="category-input"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            placeholder={category}
          ></input>
        </label>
        <button onClick={() => createTask()}>Create</button>
        <button>Cancel</button>
      </form>
    </>
  );
};
