import React from 'react';
import './Inputs.css';

const Inputs = ({ Task, Description, Category, taskDate, handleTaskChange, handleDescriptionChange, handleCategoryChange, handleDateChange, addTask }) => {
  return (
    <>
      <form>
        <div className='parent_form'>
          <input 
            type="text" 
            onChange={handleTaskChange} 
            value={Task} 
            className='Task' 
            placeholder='Enter Task' 
          />
          <input 
            type="text" 
            onChange={handleDescriptionChange} 
            value={Description} 
            className='Description' 
            placeholder='Enter description' 
          />
         
          <input 
            type="date" 
            value={taskDate} 
            onChange={handleDateChange} 
            placeholder='Enter date' 
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      </form>
    </>
  );
};

export default Inputs;
