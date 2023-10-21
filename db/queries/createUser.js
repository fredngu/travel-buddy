const db = require('../connection');

// Function to create a new user
const createUser = function(user_id, firstName, lastName, email, sub_id, home) {
  const queryString = `
    INSERT INTO orders (user_id, firstName, lastName, email, sub_id, home)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [user_id, firstName, lastName, email, sub_id, home];

  return db.query(queryString, values).then((res) => res.rows[0]);
};

module.exports = {
  createUser
};
