"use client";

import React, { useState } from "react";

const TodoList: React.FC = () => {
  const [tasksList, setTasksList] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasksList([...tasksList, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasksList.filter((_, i) => i !== index);
    setTasksList(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>TodoList</h1>
      <div className="p-2">
        <input
          className="border border-gray-300 rounded-md p-2 w-150"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Agrega una nueva tarea"
        />
        <button
          className="ml-4 bg-blue-500 text-white rounded-md p-2 w-150"
          type="button"
          onClick={handleAddTask}
        >
          Agregar
        </button>
      </div>

      <ul className="mt-8">
        {tasksList.map((task, index) => (
          <li className="pb-4 flex justify-between items-center" key={index}>
            <span>{task}</span>
            <button className="ml-4 bg-red-500 text-white rounded-md p-2 w-150"
            type="button" onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
