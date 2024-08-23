import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(
    ["hoehfe", "dwodoiwbfw", "eubcuiboec", "oheohweohw"] || localStorage
  );
  const [newTask, setNewTasks] = useState("");
  function handleInput(event) {
    setNewTasks(event.target.value);
  }

  function addTask(event) {}
  function deleteTask(index) {}
  function moveTaskUp(index) {}
  function moveTaskDown(index) {}
  return (
    <>
      <h1 className="text-center">To-Do-List</h1>
      <div className="parent-container bg-black text-white justify-content-center">
        <div className="to-do-list">
          <input
            type="text"
            placeholder="Enter your task"
            value={newTask}
            onChange={handleInput}
          />
          <button className="add-button" onClick={addTask}>
            add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <div className="child-container justify-content-between ">
              <li key={index}>
                <div className="">
                  <div className="">
                    <span className="">{task}</span>

                    <div className="">
                      <div className="">
                        <button
                          className="delete-button m-1"
                          onClick={() => deleteTask(index)}
                        >
                          delete
                        </button>
                        <button
                          className="move-button m-1"
                          onClick={() => moveTaskUp(index)}
                        >
                          moveUp
                        </button>
                        <button
                          className="move-button m-1"
                          onClick={() => moveTaskDown(index)}
                        >
                          movedown
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ol>
      </div>
    </>
  );
};
export default ToDoList;
