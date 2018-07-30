const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // Find all documents in Todos
  // It returns a mongodb cursor: pointer to documents
  // Pass it an object with key-value pairs for filtering
  // toArray returns an array of docs, not a cursor

  db.collection('Todos').find({
    _id: new ObjectID('5aa20b586526fad8b12d797d')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({
    name: 'Michael Dito'
  }).toArray().then((docs) => {
    console.log('Users named Michael Dito:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  //db.close();
});