"use client";

import React, { useState } from 'react';

const TodoList: React.FC = () => {
  const [tasksList, setTasksList] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasksList.filter((_, i) => i !== index);
    setTasksList(updatedTasks);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Agrega una nueva tarea"
      />
      <button type="button" onClick={handleAddTask}>Agregar</button>

      <ul>
        {tasksList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default TodoList;