import "./App.css";
import ClassComponent from "./Counter/ClassComponent";
import FunctionalComponent from "./Counter/FunctionalComponent";
import Calculator from "./Calculator/Calculator";
import TodoApp from "./TodoApp/TodoApp";
import TaskProvdier from "./TodoApp/TaskProvdier";

function App() {
  return (
    <div>
      <ClassComponent></ClassComponent>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <FunctionalComponent></FunctionalComponent>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <Calculator></Calculator>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <TaskProvdier>
        <TodoApp></TodoApp>
      </TaskProvdier>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
}

export default App;
