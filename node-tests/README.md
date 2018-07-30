# Testing

## utils/
A folder for utiliy files.

## /utils.js
Here we define some dummy functions.

## /utils.test.js
Here we used the expect library to demonstrate how to test our dummy functions.

## server/
A folder for server files.

## /server.js
Here we setup a really basic express webserver. The index route sends a 404 response,
and an error message object. The /users route sends an array of user objects.

## /server.test.js
Here we test some assertions about the functionality of our server.

## spies/
A folder with files we can use to test out spy functions.

## /db.js
Here we made a dummy function, we can pretend it it saves a user to our database.

## /app.js
Our fake application needs to handle a user sign up, so here we have one function
that calls the function defined in db.js.

## /app.test.js
Here we do something different, create a spy. A spy returns a function. We can replace
the db.js function with our spy, and then make some assertions about it's behavior. 
We do this in situations where the function we want to test has some complex behavior, 
and we don't want to test everything that the function can do, just a part of it. 
By making a spy function, we can avoid dealing with the complex behavior, and use the
spy to make assertions about what we really care about.