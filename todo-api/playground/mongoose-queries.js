const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5aa23cb96bdbfb65e3e8aa92';
var userId = '5aa2406a528c0983e58bd647';

if (!ObjectId.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log('User');
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});