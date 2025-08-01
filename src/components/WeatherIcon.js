import React from 'react';
function WeatherIcon({ condition }) {
  let icon;
  let description;
  
  switch (condition.toLowerCase()) {
    case 'sunny':
      icon = '☀️';
      description = 'Sunny';
      break;
    case 'cloudy':
      icon = '☁️';
      description = 'Cloudy';
      break;
    case 'rainy':
      icon = '🌧️';
      description = 'Rainy';
      break;
    default:
      icon = '❓';
      description = 'Unknown';
  }
  
  return (
    <div className="weather-icon">
      <div className="icon">{icon}</div>
      <div className="description">{description}</div>
    </div>
  );
}

export default WeatherIcon;