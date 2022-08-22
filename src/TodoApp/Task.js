import React from "react";
import { useTasks } from "./TaskProvdier";

function Task({ id, task, complete }) {
  const { setTaskStatus } = useTasks();
  const checkTask = (e) => setTaskStatus(id, e.target.checked);
  return (
    <div>
      <input type="checkbox" onChange={checkTask}></input>
      <span className={complete ? "task-done" : ""}>{task}</span>
    </div>
  );
}

export default Task;
