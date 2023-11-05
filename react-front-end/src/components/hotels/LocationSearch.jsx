import React, { useState, useEffect } from 'react';

function LocationSearch(props) {
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Create a function to initialize the autocomplete
    function initAutocomplete() {
      const input = document.getElementById('autocomplete-input');
      const options = {
        types: ['(cities)'], // Limit predictions to cities
      };
      const autocomplete = new window.google.maps.places.Autocomplete(input, options);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        setLocation(place.formatted_address);
        props.onLocationChange({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
      );
    }

    // Ensure the API is loaded
    if (window.google) {
      initAutocomplete();
    } else {
      // If the API is not loaded yet, listen for the 'load' event
      window.addEventListener('google-api-load', initAutocomplete);
    }
  }, [props]);

  const handleInputChange = (event) => {
    setLocation(event.target.value);

    // Fetch predictions when the input changes
    const service = new window.google.maps.places.AutocompleteService();
    service.getPlacePredictions(
      { input: event.target.value, types: ['(cities)'] },
      (predictions) => {
        // Do something with predictions if needed
      }
    );
  };

  return (
    <div className="relative w-full">
      <input
        id="autocomplete-input"
        placeholder="Enter location (e.g., city name)"
        value={location}
        onChange={handleInputChange}
        className="input-field"
      />
    </div>
  );
}

export default LocationSearch;
