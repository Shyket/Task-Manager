import React from "react";
import { Timer } from "../components/Timer";
export const Task = ({ task, index }) => {

  
  return (
    <>
      <div className="task-container">
        <p className="task-name">{task.name}</p>
        <p className="task-category">{task.category}</p>
        <div className="task-timer">
          <Timer props_time={task.time} />
        </div>    
      </div>
    </>
  );
};
