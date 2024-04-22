const express = require('express');
const socketio = require('socket.io');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
const server = app.listen(3000, () => {
  console.log('listening on :3000');
});


const io = socketio(server);

io.on('connection', (socket) => {
	socket.emit('news', { hello: 'world' }); // Send

	socket.on("sports", (msg) => {
		console.log(msg)
	})
})