import React, { useState } from 'react';

function LocationInput({ currentLocation, onLocationChange }) {
  const [inputValue, setInputValue] = useState(currentLocation);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationChange(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="location-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default LocationInput;