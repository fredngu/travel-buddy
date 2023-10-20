// PG database client/connection setup
// PG database client/connection setup
const { Pool } = require("pg");

const dbParams = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "Paul",
  password: process.env.DB_PASS || "password",
  database: process.env.DB_NAME || "final",
};

const db = new Pool(dbParams);

db.connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Error connecting to the database", err));

module.exports = db;
