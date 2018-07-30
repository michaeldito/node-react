const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // Find a record by id, update it's completed value to true
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5aa2132a218348e6a8698a60')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // Find a record by id, set it's name, increment age
  // Note the the set and inc are two parts to one arg
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aa20c46d81eb3d8cc5ad24f')
  }, {
    $set: {
      name: 'Mike Dito'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  
  //db.close();
});