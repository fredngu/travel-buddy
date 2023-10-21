const db = require('../connection');

// Function to return all users
const returnAllUsers = function() {
  const queryString = `
    SELECT *
    FROM user
  `;
  return db.query(queryString, values).then((res) => res.rows);
};

module.exports - {
  returnAllUsers
}