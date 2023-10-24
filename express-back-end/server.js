const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const db = require('./db/queries');
const { get } = require('request');
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

const getUsers = async() => {
  return new Promise(function(resolve, reject) {
    db.query('SELECT * FROM traveller ORDER BY traveller_id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.get('/travelers', async (req, res) => {
  try {
    const allUsers = await db.query('SELECT * FROM traveller ORDER BY traveller_id ASC');
    res.json(allUsers.rows)
  } catch (err) {
    console.error(err.message)
  }
})

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
