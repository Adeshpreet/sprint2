import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);
function TaskProvdier({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) =>
    setTasks([...tasks, { id: v4(), task, complete: false }]);

  const setTaskStatus = (id, taskStatus) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, complete: taskStatus } : t))
    );
  };
  return (
    <TaskContext.Provider value={{ tasks, addTask, setTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvdier;
