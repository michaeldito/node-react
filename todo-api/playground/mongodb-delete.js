const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // In the json returned as result, result: { n, ok }
  // n = num deleted, ok = 1 means we deleted something
  db.collection('Todos').deleteMany({
    text: 'Study'
  }).then((result) => {
    console.log(result);
  });

  // deleteOne
  db.collection('Todos').deleteOne({
    text: 'Walk the dog'
  }).then((result) => {
    console.log(result);
  });

  // findOneAndDelete - returns data and deletes it
  db.collection('Todos').findOneAndDelete({
    text: 'Something to do'
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});