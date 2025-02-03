import React from 'react'
import './Heading.css'
import Timing from './Timing/Timing'
import Weather from './Weather/Weather'

const Heading = () => {
  return (
    <div className='Heading_parent'>

 <Timing/> 
 

<Weather/>

    </div>
  )
}

export default Heading