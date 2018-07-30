// const MongoClient = require('mongodb').MongoClient;
// Using object destructuring we can do this
const {MongoClient, ObjectID} = require('mongodb');

// Args
// (1) url where your db lives
// (2) callback upon success/failure
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // insertOne inserts a document into the db
  // Args
  // (1) the object to insert
  // (2) a callback to be executed upon completion
  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name: 'Michael Dito',
    age: 26,
    location: 'Novato'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});