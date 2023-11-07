//Comparison making route
import { useState } from 'react'
import { Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import TripComparisonTable from "../components/TripComparisonTable";
import InputBox from '../components/InputBox';
import { Button } from "@mui/material";
import tripImage from '../images/comparisons-hero.jpg';
import axios from 'axios';

export function MakeComparison() {
  const navigate = useNavigate();
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


  const handleComparisonClick = () => {
    pushComparisonToDB(selectedOptions, inputValue)
  };

  const pushComparisonToDB = (selectedTrips, comparisonName) => {
    // let traveller_id = window.sessionStorage.getItem('traveller_id')
    let traveller_id = 20
    const newComparison = {
      comparison_name: comparisonName,
      traveller_id,
      trip1: selectedTrips[0],
      trip2: selectedTrips[1],
      trip3: selectedTrips[2],
      trip4: selectedTrips[3],
    };
    axios.post('/comparisons', newComparison)
    .then(() => navigate("/trips"))
  }
  return (
    <div>
<<<<<<< HEAD
=======
    <img src={tripImage} alt="Hotel" className="w-full h-auto" style={{ height: '400px' }}/>
      <div style={{ background: '#9C27B0' }} className="p-4 text-white">
        <h1 className="text-4xl font-bold mb-4">Map your memories. Measure your miles.</h1>
        <p className="text-lg">Visualize your voyages. Data-drive your discoveries.</p>
      </div>
>>>>>>> d56b71e33a4ed2d3d26696b49ae53c8d7c91b660
      <Typography component={'span'} variant={'body2'}>
      <TripComparisonTable 
        trips = {location?.state.trips} 
        selectedOptions={selectedOptions}
        onCheckboxChange={handleChecked}
      />
      <InputBox value={inputValue} onInputChange={handleInputChange} />
      <Button onClick={handleComparisonClick} component={'span'} variant={'body2'}>
        SAVE COMPARISON
      </Button>
      </Typography>
    </div>
  )
}