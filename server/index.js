const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
// 
io.on('connection',(socket) =>
{
    console.log("New connection");
    socket.on('disconnect',()=>
    {
        console.log("User disconnected");
    })
});
// 
const router = require('./router');
const PORT = process.env.PORT || 7699;
app.use(router);
server.listen(PORT,()=> console.log(`Running on port ${PORT}`));