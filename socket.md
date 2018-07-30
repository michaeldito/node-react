# Socket.io

Makes it really easy to setup a server that supports web sockets
and to create a front end that communicates with the server. It
has a backend and a front end library.

> npm i socket.io@1.4.8 --save

## In server.js
- Load in http
`const http = require('http');`
- Create a server using it (this is what app.listen() uses)
`let server = http.createServer(app);`
(Express uses http behind the scenes)
- Configure the server to use socketio
`let io = socketIO(server);`
- Now listen on our port with that server
`server.listen(port, () => {`
- Load in the socket library in index.html
`<script src="/socket.io/spcket.io.js"></script>`
- Initialize the socket connection in another script
`var socket = io();`

**We can now accept socket connections!**

Web sockets are a persistent technology. The client and server
keep the communication open for as long as they both want to.

### io.emit
Emits messages to every user connected

### socket.broadcast.emit
Emits a message to everyone on the socket server except the current
user

### socket.emit
Emits an event specificly to one user

### io.to('room name')
Emits an event to everyone connected to 'room name'

### socket.broadcast.to('room name')
Emits an event to everyone in the 'room name' except for the current
user

# Ideas for improvement
- Make chatrooms case insensitive
- Make usernames unqiue
- add a list of currently active chatrooms at the join screen
