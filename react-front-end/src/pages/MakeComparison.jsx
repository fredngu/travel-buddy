//Comparison making route
import { useState } from 'react'
import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"
import TripComparisonTable from "../components/TripComparisonTable";
import InputBox
 from '../components/InputBox';
export function MakeComparison() {
  const location = useLocation();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const handleChecked = (tripId) => {
    if (selectedOptions.includes(tripId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== tripId));
    } else {
      setSelectedOptions([...selectedOptions, tripId]);
    }
  }
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  console.log(selectedOptions)

  console.log(location?.state.trips)
  return (
    <div>

      <Typography component={'span'} variant={'body2'}>
      <h1>Comparisons</h1>
      <TripComparisonTable 
        trips = {location?.state.trips} 
        selectedOptions={selectedOptions}
        onCheckboxChange={handleChecked}
      />
      <InputBox value={inputValue} onInputChange={handleInputChange} />

      </Typography>
    </div>
  )
}