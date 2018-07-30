const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'woodeedoo';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$FBLLuHYR9xK7nzPla22SZOGXHe.pExb1vMjFzYGF6bOUVh1EWB8Ky';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});