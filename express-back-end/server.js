const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const db = require('./db/queries');
const PORT = 8080;

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

App.get('/travellers', async (req, res) => {
  try {
    const allUsers = await db.query('SELECT * FROM traveller ORDER BY traveller_id ASC');
    res.json(allUsers.rows)
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

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
