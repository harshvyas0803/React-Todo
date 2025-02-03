import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = ({ newTask }) => {
  const [tasks, setTasks] = useState([]); 

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, [newTask]);

  // ✅ Function to delete a task
  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update localStorage
  };

  // ✅ Function to mark task as complete (toggle)
  const handleComplete = (taskId) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update localStorage
  };

  return (
    <div className='Card_p'>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task, index) => (
          <div className={`card ${task.completed ? "completed" : ""}`} key={index}>
            <h1>{task.Task}</h1>
            <p>{task.Description}</p>
            <p>{task.Category}</p>
            <p>{task.Date}</p>
            
            <button onClick={() => handleComplete(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
