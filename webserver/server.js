const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

// Register a directory that contains our partials
// Now run: `nodemon server.js -e js,hbs`
hbs.registerPartials(__dirname + '/views/partials');

// Set some express configurations to use handlebars
app.set('view engine', 'hbs');

// Another middleware function
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.')
    }
  });
  next();
});

// Register a middleware function to render a maintenance page.
// This will override the previous middleware function we defined above.
// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

// Let's use some express middleware to serve our public folder/
// __dirname contains the path to our project folder.
// By moving this below the maintenance middleware, we prevent the
// public folder from being viewed.
app.use(express.static(__dirname + '/public'));

// Register helper functions that our .hbs templates can call
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})

// These are routes that are listening for GET requests.
// When these requests come in, they call their callback function.
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home',
    welcomeMessage: 'Welcome!',
  });
});

// render will let you render your templates with your current view engine
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'Unable to fulfill request'
  });
});

// listen takes an optional second argument, let's use it to let
// the user know the server is up.
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});