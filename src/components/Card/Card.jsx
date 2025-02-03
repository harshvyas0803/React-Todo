import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = ({ newTask }) => {
  const [tasks, setTasks] = useState([]); // ✅ Initialize with an empty array

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, [newTask]); // ✅ Runs when `newTask` changes

  return (
    <div className='Card_p'>
      {tasks.length === 0 ? (
        <p>No task</p>
      ) : (
        tasks.map((task, index) => (  // ✅ Changed `tasks` to `task`
          <div className="card" key={index}>  {/* ✅ Used `index` as the key */}
            <h1>{task.Task}</h1>
            <p>{task.Description}</p>
            <p>{task.Category}</p>
            <p>{task.Date}</p>
            <button>Complete</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
