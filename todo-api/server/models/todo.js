var mongoose = require('mongoose');

// Create the object relation model for the Todo
// Args
// (1) name of model
// (2) the model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,   // mongoose will cast numbers/bools to strings
    required: true,
    minlength: 1,
    trim: true      // remove leading or trailing whitespace
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  // this allows us to associate a todo with a specific user
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = {Todo};