import React, { useEffect, useState } from 'react'
import './Timing.css'


const Timing = () => {


  const [Time, setTime] = useState("")

useEffect(() => {
  
   const interval = setInterval(() => {
  
    const date = new Date();
    const time = date.toLocaleTimeString()
  setTime(time)


    
   }, 1000);
   return () => clearInterval(interval);

}, [])



    const date = new Date();
  
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName =days[date.getDay()]

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const monthName =months[date.getMonth()]
 
    const formattedDate = `${date.getDate()}-${monthName}-${date.getFullYear()}`;




  return (
    <div className='PArent' >{dayName+"," }
    
    <br/>
 {formattedDate}  <br/> {Time}</div>
  )
}

export default Timing