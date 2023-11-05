const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const db = require('./db/queries');
const PORT = process.env.PORT || 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', `http://localhost:3000`);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.get('/trips/all', async (req, res) => {
  try {
    const allUsers = await db.query('SELECT * FROM trip');
    res.json(allUsers.rows)
  } catch (err) {
    console.error(err.message)
  }
})

App.get('/trips/:id', async (req, res) => {
  try {
    const traveller_id = req.params.id
    console.log(traveller_id)
    const allTrips = await db.query('SELECT * FROM trip WHERE traveller_id = $1', [traveller_id]);
    res.json(allTrips.rows)
  } catch (err) {
    console.error(err.message)
  }

})

App.get('/comparisons/:id', async (req, res) => {
  try {
    const traveller_id = req.params.id
    console.log(traveller_id)
    const allComparisons = await db.query('SELECT * FROM comparison WHERE traveller_id = $1', [traveller_id]);
    res.json(allComparisons.rows)
  } catch (err) {
    console.error(err.message)
  }

})


App.post('/travellers', async (req, res) => {
  const user = req.body;
  console.log(user)
  const checkUser = await db.query('SELECT * FROM traveller WHERE sub_id = $1', [user.sub])
  if (checkUser.rows.length === 0) {
    const newUser = await db.query('INSERT INTO traveller(firstName, lastName, email, sub_id) VALUES($1, $2, $3, $4) RETURNING *', [
      user.given_name,
      user.family_name,
      user.email,
      user.sub
    ])
    res.send(newUser.rows)
  }
  res.send(checkUser.rows)
})

// Define a route for inserting trip data into the database
App.post('/trips', async (req, res) => {
  const tripData = req.body;
  console.log(tripData)
  // Insert trip data into the database using our database queries
    const newTrip = await db.query('INSERT INTO trip(trip_name, traveller_id, city_name, start_date, end_date, hotel_price, hotel_name, flight_price, city_image_url) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [tripData.trip_name, tripData.traveller_id, tripData.city_name, tripData.start_date, tripData.end_date, tripData.hotel_price, tripData.hotel_name, tripData.flight_price, tripData.city_image_url]);
    res.json({ success: true, message: 'Trip data inserted successfully', data: newTrip.rows });

});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
