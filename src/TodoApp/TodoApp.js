import React from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

function TodoApp() {
  return (
    <div className="middle">
      <h1>Todo List</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default TodoApp;
