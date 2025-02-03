import React from 'react'
import './Heading.css'
import Timing from './Timing/Timing'
import Weather from './Weather/Weather'

const Heading = () => {
  return (
    <div className='Heading_parent'>

 <Timing/> 
 <h1>To-do</h1>

<Weather/>

    </div>
  )
}

export default Heading