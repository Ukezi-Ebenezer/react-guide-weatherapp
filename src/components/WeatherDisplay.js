import React from 'react';
import WeatherIcon from './WeatherIcon';

function WeatherDisplay({ data }) {
  const { temperature, condition, location, icon } = data;

  return (
    <div className="weather-display">
      <h2>{location}</h2>
      <div className="weather-info">
        {icon ? (
          <div className="weather-icon">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={condition}
              style={{ width: '80px', height: '80px' }}
            />
            <div className="description">{condition}</div>
          </div>
        ) : (
          <WeatherIcon condition={condition} />
        )}
        <div className="temperature">
          <span className="temp-value">{temperature}</span>
          <span className="temp-unit">°F</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;