import React, { useState, useEffect } from 'react';
import LocationInput from './LocationInput';
import WeatherDisplay from './WeatherDisplay';

function WeatherApp() {
  const [location, setLocation] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&{YOUR API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          setWeatherData({
            temperature: data.main.temp,
            condition: data.weather[0].main,
            location: data.name,
            icon: data.weather[0].icon // add icon code
          });
        } else {
          setWeatherData({
            temperature: 'N/A',
            condition: 'Not found',
            location: location,
            icon: null
          });
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        setWeatherData({
          temperature: 'N/A',
          condition: 'Error',
          location: location
        });
        setLoading(false);
      });
  }, [location]);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div className="weather-app">
      <LocationInput 
        currentLocation={location} 
        onLocationChange={handleLocationChange} 
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <WeatherDisplay data={weatherData} />
      )}
    </div>
  );
}

export default WeatherApp;
