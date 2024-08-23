import { useState } from "react";
import viteLogo from "/vite.svg";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  return (
    <>
      <main>
        <Header tasks={tasks}/>
        <ToDoList tasks={tasks} setTasks={setTasks} setNewTask={setNewTask} newTask={newTask} />
        <Footer />
      </main>
    </>
  );
}

export default App;
