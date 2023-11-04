const express = require('express');
const router = express.Router();
 // Import our database queries
const db = require('../db/queries');

// Define a route to insert data into the database
router.post('/insertData', async (req, res) => {
  const { itineraryData, selectedHotelData } = req.body;

  // Insert data into the database using our database queries
  try {
    const result = await db.insertData(itineraryData, selectedHotelData);
    res.json({ success: true, message: 'Data inserted successfully', data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error inserting data', error: error.message });
  }
});

module.exports = router;
