import React, { useState ,useEffect} from 'react'
import './Weather.css'
import axios from 'axios'


const Weather = () => {


const [Weather, setWeather] = useState(null)
const [Error, setError] = useState(null)
 const [location, setlocation] = useState({lon:null,lat:null})





 useEffect(() => {
  // Check if geolocation is available in the browser
  if ("geolocation" in navigator) {
    // Get the device's current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Success: set the latitude and longitude in state
        setlocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
 
      },
      (err) => {
        // Error: set an error message
        setError(err.message);
      }
    );
  } else {
    setError("Geolocation is not supported by this browser.");
  }
}, []); 




useEffect(() => {
 
  if (location.lat && location.lon) {
      
  const apiKey =`0c99ffd7480c7b772d906de298b51970`
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`;

  axios
  .get(apiUrl)
  .then((response)=>{
    
    setWeather(response.data)
 

 

  })
  .catch(() => {
    setError("Error fetching weather data.");
  });
  }
 
}, [location])

 

  return (

<div className='WeatherContainer'>
  {Weather ? (
    <div className='W_parent'>
      <div className='W_name text'>{Weather.name}</div>
      <div className='Temp text'>Temperature: {Weather.main.temp}°C</div>
      <div className='Temp_max text'>Max Temp: {Weather.main.temp_max}°C</div>
      <div className='Temp_min text'>Min Temp: {Weather.main.temp_min}°C</div>
      <div className='Weather_desc text'>Weather: {Weather.weather[0].description}</div>
    </div>
  ) : (
    <p>Loading...</p>
  )}
</div>

    

  )
}

export default Weather