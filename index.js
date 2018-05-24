var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('Client connected');
  socket.on('event', function(event){
    socket.broadcast.emit('event', event);
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});