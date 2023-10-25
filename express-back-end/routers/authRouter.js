const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const db = require('./db/queries');
const PORT = 8080;

App.get('/travellers', async (req, res) => {
  try {
    const allUsers = await db.query('SELECT * FROM traveller ORDER BY traveller_id ASC');
    res.json(allUsers.rows)
  } catch (err) {
    console.error(err.message)
  }
})

App.post('./travellers', async (req, res) => {
  const existingTraveller = await db.query(
    "SELECT sub_id from traveller WHERE username=$1",
    [req.body.sub_id]
  );

  if (existingTraveller.rowCount === 0) {
    // register
    const newUserSubID = await db.query(
      "INSERT INTO traveller(firstname, lastname, email, sub_id) values($1, $2, $3, $4, $5) RETURNING sub_id", [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.sub_id
      ]
    );
    req.json({loggedIn: true, sub_id});
  } else {
    res.json({loggedIn:false, status: "Username taken"});
  }
})