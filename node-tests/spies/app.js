let db = require('./db');

module.exports.handleSignup = (email, password) => {
  // Check if the email already exists
  // Save the user to the db
  // Send the welcome email
  db.saveUser({email, password});
};