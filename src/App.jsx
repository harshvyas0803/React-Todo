import React, { useState, useEffect } from "react";
import Heading from "./components/Heading/Heading";
import Inputs from "./components/Inputs/Inputs";
 
import Card from "./components/Card/Card";
import "./App.css";

const App = () => {
  // State for input fields
  const [Task, setTask] = useState("");
  const [Description, setDescription] = useState("");
  const [taskDate, setTaskDate] = useState(""); // Corrected variable name
  const [newTask, setNewTask] = useState([]);

  // Load tasks from localStorage when component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setNewTask(storedTasks);
  }, []);

  // Handle input changes
  const handleTaskChange = (e) => setTask(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
 
  const handleDateChange = (e) => setTaskDate(e.target.value); // Updated function

  // Add task function
  const addTask = (e) => {
    e.preventDefault();

    if (!Task.trim() || !Description.trim()  || !taskDate) {  // Fixed reference to taskDate
      alert("Input fields can't be empty!!");
      return;
    }

    const currentDate = new Date();
    let id = currentDate.getTime();

    const updatedTasks = [...newTask, { id, Task, Description,  Date: taskDate }];
    setNewTask(updatedTasks); // Update state
    addToLocalStorage(updatedTasks); // Save to local storage

    // Empty input fields
    setTask("");
    setDescription("");
 
    setTaskDate(""); // Clear the date field
  };

  // Save to localStorage
  const addToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <div className="parent">
      <div className="blurred-background">
        <Heading />
        <Inputs
          Task={Task}
          Description={Description}
       
          taskDate={taskDate}  // Pass taskDate correctly
          handleTaskChange={handleTaskChange}
          handleDescriptionChange={handleDescriptionChange}
  
          handleDateChange={handleDateChange}
          addTask={addTask}
        />
 
        <Card newTask={newTask} />
      </div>
    </div>
  );
};

export default App;
