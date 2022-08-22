import React from "react";
import Task from "./Task";
import { useTasks } from "./TaskProvdier";

function TaskList() {
  const { tasks } = useTasks();
  return (
    <div>
      {tasks.map((task, i) => (
        <Task key={i} {...task} />
      ))}
    </div>
  );
}

export default TaskList;
