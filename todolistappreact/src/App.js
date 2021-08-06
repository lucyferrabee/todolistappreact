import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button/Button";
import InputForm from "./Components/InputForm/InputForm";
import TasksList from "./Components/TasksList/TasksList";
import AddTask from "./Components/AddTask/AddTask";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to your to do list!
        </h1>
          <p>

          </p>
        <TasksList />
        <AddTask />

      </header>
    </div>
  );
}

export default App;
