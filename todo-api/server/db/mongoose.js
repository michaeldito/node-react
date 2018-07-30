var mongoose = require('mongoose');

// Tell mongoose which promise library to use 
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
