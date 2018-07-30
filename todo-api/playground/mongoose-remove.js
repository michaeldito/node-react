const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({ _id: '5aa3265663c65be649dc34e7'}).then((result) => {
  console.log(result);
});

Todo.findByIdAndRemove('5aa3265663c65be649dc34e7').then((todo) => {
  console.log(todo);
});