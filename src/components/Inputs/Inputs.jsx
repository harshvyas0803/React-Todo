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
          <select 
            id="category" 
            className='Category' 
            value={Category} 
            onChange={handleCategoryChange} 
            name="category"
          >
            <option value="Category1">Category1</option>
            <option value="Category2">Category2</option>
            <option value="Category3">Category3</option>
          </select>
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
