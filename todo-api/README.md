# Todo API

A simple REST API where users can POST, GET, DELETE, and UPDATE todos. Users can register, 
login, and delete their authorization token.

## server
A folder for all server side code.

## server/server.js
Our asynchronous express server that lets users post, get, delete, and update todos. It 
can also register a new user, login a user, and delete their authorization token.

## server/serverNotAsync.js
The same express server, but not asynchronous.

## server/config/
Provides the configuration for our environment variables.

## config/config.js
Configures the env variable.

## config/config.json
Configures the PORT, MONGODB_URI, JWT_SECRET for both the test and development environments.

## server/db/
A folder for an database configuration files.

## db/mongoose.js
Configure the appropriate promise library for mongoose to use, and export the mongoose variable.

## server/middleware/
A folder for our middleware functions

## middleware/authenticate.js
Contains our asynchronous authenticate function. We get the value of the users token, query the
database to find a user based on that token, then set the request objects {user, token} values 
to be what we have found. Or we handle errors appropriately.

## middleware/authenticateNotAsync.js
Contains a synchronous authenticate function that users promises. Same functionality as the above.

## server/models/
Contains our mongoose schemes for a todo and a user.

## models/todo.js
The schema for a todo.

## models/user.js
The schema for a user. We can also override methods, like toJSON(). We can define methods on our
schema, like generateAuthToken(), and removeToken(). We can define statics like findByToken(), 
findByCredentials(). 

We define a serial middleware function using `.pre('save', ...)`. That function will run before we 
save anything to the database.

## server/tests/
A folder for server side code tests.

## tests/server.test.js
Contains a ton of tests to verify that the server functionality is correct.

## tests/seed/
A folder for test data and functions for server side code tests.

## seed/seed.js
Contains the data and functions for testing.

## playground
A folder for some practice files.

## /hashing.js
Contains demonstrations of using the SHA256 hashing function, along with how to use a salt,
and verify that the user did not modify anything.

## /hashing2.js
Contains demonstrations of using json web tokens, which do the hashing and verification for us.

## /hashing3.js
Contains a demo of using the brcrypt library to generate a salt, hash, and compare a password
with the hashed password.

## /mongodb-*.js
All of these files demonstrate how to use mongodb. Specifically how to:

  - connect
  - delete
  - find
  - update

## /mongoose-*.js
All of these files demonstrate how to use mongoose schemas to interract with mongodb.
Specifically how to:

  - query
  - remove
