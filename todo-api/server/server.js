require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');
var {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

// because we authenticate, we need to know the _creator as well
app.post('/todos', authenticate, async (req, res) => {
  try {
    const todo = new Todo({
      text: req.body.text,
      _creator: req.user._id
    });

    const doc = await todo.save();
    res.send(doc);
  } catch (e)  {
    res.status(400).send(e);
  };
});

app.get('/todos', authenticate, async (req, res) => {
  try {
    const todos = await Todo.find({ _creator: req.user._id });
    res.send({todos});
  } catch (e) {
    res.status(400).send(e);
  };
});

app.get('/todos/:id', authenticate, async (req, res) => {
  try {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    const todo = await Todo.findOne({ _id: id, _creator: req.user._id });

    if (!todo) {
      res.status(404).send();
    }

    res.send({todo});
  } catch (e)  {
    res.status(400).send();
  };
});

app.delete('/todos/:id', authenticate, async (req, res) => {
  try {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    const todo = await Todo.findOneAndRemove({
      _id: id,
      _creator: req.user._id
    });

    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  } catch (e) {
    res.status(400).send();
  };
});

app.patch('/todos/:id', authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    // use pick to select only the properties that we want users to update
    let body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
      return res.status(404).send(e);
    }

    if (_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
    }
    else {
      body.completed = false;
      body.completedAt = null;
    }

    // new works similar to returnOriginal in mongodb
    const todo = await Todo.findOneAndUpdate({_id: id, _creator: req.user._id}, {$set: body}, {new: true});

    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  } catch (e) {
    res.status(400).send();
  };
});

app.post('/users', async (req, res) => {
  try {
    const body = _.pick(req.body, ['email', 'password']);
    const user = new User(body);
    await user.save();
    const token = await user.generateAuthToken();
    res.header('x-auth', token).send(user);
  } catch (e) {
    res.status(400).send();
  }
});

// Private routes need the user to be authenticated first
// Before anything is done, authenticate is run
// This route gets run only after next() is executed in authenticate
app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

app.post('/users/login', async (req, res) => {
  try {
    const body = _.pick(req.body, ['email', 'password']);
    const user = await User.findByCredentials(body.email, body.password)
    const token = await  user.generateAuthToken();
    res.header('x-auth', token).send(user);
  } catch (e) {
    res.status(400).send();
  };
});

app.delete('/users/me/token', authenticate, async (req, res) => {
  try {
    await req.user.removeToken(req.token);
    res.status(200).send();
  } catch (e) {
    res.status(400).send();
  };
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = {app};