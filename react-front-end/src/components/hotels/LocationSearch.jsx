import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

function LocationSearch(props) {
  const [location, setLocation] = useState('');

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  const handleLocationSelect = async (newLocation) => {
    setLocation(newLocation);
    try {
      const results = await geocodeByAddress(newLocation);
      const newCoordinates = await getLatLng(results[0]);
      props.onLocationChange(newCoordinates);
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  return (
    <PlacesAutocomplete value={location} onChange={handleLocationChange} onSelect={handleLocationSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Enter location (e.g., city name)',
              className: 'input-field',
            })}
          />
          <div>
            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
              };
              return (
                <div 
                  {...getSuggestionItemProps(suggestion, { style })} key={suggestion.description}>
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default LocationSearch;
