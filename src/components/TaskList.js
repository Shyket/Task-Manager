import React from "react";
import { useState } from "react/cjs/react.development";
import { AddTask } from "./AddTask";
import { Task } from "./Task";

export const TaskList = ({ data }) => {

  const [taskList, setTaskList] = useState(data);

  console.log(taskList);
  return (
    <>
      <ul id="tasklist">
        {taskList?.map((task, index) => {
          return (
            <li key={task.id}>
              <Task index={index} task={task} />
            </li>
          );
        })}
      </ul>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
    </>
  );
};
