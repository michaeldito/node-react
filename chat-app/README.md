# Chat App

A chat application built using express.js, socket.io, and uses es6 classes.

## public/js/chat.js
Our client side javascript. We establish a connection to the server with
`var socket = io()`. Then we define some callbacks to execute when certain
events fire off. These are when:

  - Connection occurs
  - Disconnection occurs
  - Updating the user list
  - New message
  - New location message

We also wrote a couple javascript functions to help. The function scrollToBottom()
will make sure that the user sees the most recent chat message by scrolling to the
bottom, if the user isn't already looking at previous messages.

We also made a click listener function using jQuery for when the user hits
the #send-button.

## server/
Contains a folder of utility js files, tests, and the server.

## /server.js
An express webserver, with a socket.io connection. We listen for new connections from
the client, and when we receive them, we listen for certain events. Every event is a
connection event. Their are connection events for when a user joins, message creation,
location message creation. Their is also a listener for when the client disconnects.

## server/utils
Files containing functions, a class, and tests to use.

## /utils/message.js
Arrow functions that return a message object, and a location message object are 
implemented and exported.

## /utils/message.test.js
Mocha tests for message.js functions.

## /utils/user.js
An es6 User class is defined. Methods for addUser, removeUser, getUser, getUserList
are implemented, and the class is exported.

## /utils/user.test.js
Mocha tests for user.js class.

## /utils/validation.js
An arrow function for determining if an object is a string of length > 0.

## /utils/validation.test.js
Mocha tests for the validation.js function.
