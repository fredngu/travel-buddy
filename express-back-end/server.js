const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

const { Pool } = require("pg");

const dbParams = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "paul",
  password: process.env.DB_PASS || "password",
  database: process.env.DB_NAME || "final",
};

const db = new Pool(dbParams);

db.connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Error connecting to the database", err));

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
App.get("/api/data", (req, res) => {
  // res.json({
  //   message: "Seems to work!",
  // })
  const sqlInsert =
    "INSERT INTO traveller (traveller_id, firstName, lastName, email, sub_id, home) VALUES (1, Paul, McA, paul@test.com, 1, Toronto )";
  db.query(sqlInsert, (req, res) => {
    console.log("Traveller added");
  });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

App.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

module.exports = db;
