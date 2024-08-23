import React, { useState } from "react";

const ToDoList = ({ setNewTask, setTasks, tasks, newTask }) => {
  function handleInput(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
    setTasks(updatedTasks);
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <>
      <div className=" mx-auto parent-container bg-black text-white justify-content-center">
        <div className="to-do-list">
          <input
            type="text"
            placeholder="Enter your task"
            value={newTask}
            onChange={handleInput}
          />
          <button className="add-button" onClick={addTask}>
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <div className="child-container m-3">
              <li key={index}>
                <span className="text text-center m-1">{task}</span>
                <button
                  className="delete-button m-1"
                  onClick={() => deleteTask(index)}
                >
                  <i className="bi bi-trash3-fill"></i>
                </button>
                <button
                  className="move-button m-1"
                  onClick={() => moveTaskUp(index)}
                >
                  <i className="bi bi-arrow-up"></i>
                </button>
                <button
                  className="move-button m-1"
                  onClick={() => moveTaskDown(index)}
                >
                  <i className="bi bi-arrow-down"></i>
                </button>
              </li>
            </div>
          ))}
        </ol>
      </div>
    </>
  );
};
export default ToDoList;
