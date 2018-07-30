var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
// get the value of the header for x-auth to verify the token and user
var token = req.header('x-auth');
  // find the right user associated with the token
  User.findByToken(token).then((user) => {
    if (!user) {
      // valid toke, but no user, reject this Promise
      // resulting in a 401
      return Promise.reject();
      // now we jump immediately to the catch below
    }

    // instead of sending response
    // set the req.user equal to the user we found 
    // and the same for token
    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    // 401 status means authentication is required and the user
    // must have authenticated incorrectly
    res.status(401).send();
  });
};

module.exports = {authenticate};