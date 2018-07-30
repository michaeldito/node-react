const {SHA256} = require('crypto-js');

var message = '3';
var hash = SHA256(message).toString();

// If we re-run this script we will get the same hash every time.
// It's a one way hash, and it always hashes a string to the same value.
console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
  id: 4
};

// We're going to salt the hash to make sure the user doesn't
// try anything funny.
var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'secret-salt').toString()
};

// Evil hacker would do this.
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

// Check to see if hacker changed data.
var resultHash = SHA256(JSON.stringify(token.data) + 'secret-salt').toString();
if (resultHash === token.hash) {
  console.log('Data was not changed');
}
else {
  console.log('Data was changed. Don\'t trust!');
}