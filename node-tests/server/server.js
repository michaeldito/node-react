const express = require('express');

let app = express();

app.get('/', (req, res) => {
  //res.send('Hello world!');
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Mike',
    age: 26
  }, {
    name: 'Andrew',
    age: 25
  }, {
    name: 'Jen',
    age: 26
  }]);
});

app.listen(3000);

// When we export app, we can use it in server.test.js, or any file.
module.exports.app = app;