const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// jwt.sign
// Takes the obj and signs it - creates hash and returns token value.

// jwt.verify
// Takes a token and secret and makes sure data was not manipulated.

var data = {
  id: 10
};

var token = jwt.sign(data, 'secret-salt');
console.log(token);

var decoded = jwt.verify(token, 'secret-salt');
console.log(decoded);

// This will result in an error, program terminates
// var decodedBad = jwt.verify(token + 'bad-stuff', 'secret-salt');
// console.log(decodedBad);