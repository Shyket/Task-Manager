import React from "react";
import { useState } from "react/cjs/react.development";
import { TaskForm } from "./TaskForm";



export const AddTaskForm = ({ addTask, setIsNewTaskOpen }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const createTask = () => {
    let task = {};
    task.name = name;
    task.category = category;
    task.time = 0;
    addTask(task);
  };

  return (
    <div className="add-task-form">
      <TaskForm
        name={name}
        category={category}
        setName={setName}
        setCategory={setCategory}
      />
      <div className="form-buttons">
        <button id="create-task-button" onClick={() => createTask()}>
          Create
        </button>
        <button onClick={() => setIsNewTaskOpen(false)} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  );
};
