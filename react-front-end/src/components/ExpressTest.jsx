import React, { useState } from 'react';
import { Button } from "@mui/material"
import axios from "axios";
export default function ExpressTest() {
  const [message, setMessage] = useState('Click the button to load data!',)

  const fetchData = () => {
    axios
      .get('/api/data')
      .then((response) => {
        // handle success
        console.log(response.data);

        console.log(response.data.message);
        setMessage(response.data.message);
      });
  };

  return (
    <>
      <h1>{message}</h1>
      <Button variant="contained" onClick={fetchData}>Fetch Data</Button>
    </>
  )
};