# Node

## --save-dev: Saves this package for development purposes only, found
##  in package-json "devDependencies", keeps this library local
npm install <lib-name> --save-dev

## --exec '<name>'
## Run the command <name>
`nodemon --exec 'npm test'`

## run
## Start the test-watch script located in package.json
`npm run test-watch`

## bare bones express web server
```javascript

const express = require('express');
let app = express();
app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.listen(3000);
```

## Express.js
**IMPORTANT**
Always remember the / for app routes
Really understand whats in req, res
**IMPORTANT**

# Libraries for tests
- mocha@3.0.0 --save-dev
- expect@21.1.0 --save-dev
- supertest@2.0.0 --save-dev
- rewire@2.5.2 --save-dev

# Http libraries
- axios@0.16.1 --save

# Utility libraries
- body-parser@1.15.2
- lodash@4.15.0
- validator@5.6.0 --save

# Time libraries
- moment@2.15.1 --save

# Built-In
- path

# Hashing libraries
- crypto-js@3.1.6 --save
- jsonwebtoken@7.1.9 -- save
- bcryptjs@2.3.0 --save

# Github
- node monogodb native

# For Heroku
Take out NODE_ENV in start script in package.json

# Authentication
## JSON Web Tokens (JWT)
We need to autheticate requests from our users.
We send back tokens from sign up and login requests.
The client takes the token and uses it to authenticate other requests.
They then make calls to routes after authentication is successful.

## bcrypt
Has salt and hash combined as one method!

## Promises