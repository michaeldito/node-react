const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,  // validator: (value) => { return validator.isEmail(value); },
      message: '{VALUE} is not a valid email'
    },
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

// We can override the toJSON method so that we don't return data we don't want
// the user to see as a json response.
UserSchema.methods.toJSON = function () {
  var user = this;
  // takes your mongoose variable user, and converts it to a
  // regular object where only the propertires available on the document exist
  var userObject = user.toObject();
  
  // choose what is returned as json to the user response body
  return _.pick(userObject, ['_id', 'email']);
};

// Arrow functions do not bind a this keyword.
// We need a this keyword for our user methods! 
UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET).toString();

  user.tokens = user.tokens.concat([{access, token}]);

  // user.save() returns a promise, so we call .then()
  // Usually we return inside of this line, but here it's
  // legal because we're returning the value of the callback.
  return user.save().then(() => {
    return token;
  });
};

// Statics are model methods, not instance methods.
// Instance methods get called with the individual document, but
// model methods get called with the model as the 'this' binding.
UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

  try {
    // token to decode, and secret
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  }
  catch (e) {
    // when the token is invalid, return a promise that is
    // always going to reject. 
    return Promise.reject();
  }
  // return the promise so that we can do chaining in server.js
  return User.findOne({
    '_id': decoded._id,
    // find a user whose tokens arry has an object where token prop 
    // equal stoken prop we have here.
    // to query a nested doc wrap value in quotes and specify
    // what to query for
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

UserSchema.statics.findByCredentials = function (email, password) {
  var User = this;

  return User.findOne({email}).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        }
        else {
          reject();
        }
      });
    });
  });
};

// This will get run before we save anything to the db
// We need to bind 'this' keyword, so no arrow functions here
UserSchema.pre('save', function (next) {
  var user = this;

  // If the user modified their password (or they are creating an account)
  // We need to hash their password before we insert it.
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });   
  }
  else {
    next();
  }
});

// $pull lets you remove an item from an array that matches criteria
UserSchema.methods.removeToken = function (token) {
  var user = this;

  return user.update({
    $pull: {
      tokens: {token}
    }
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};