const WebSocket = require('websocket').server;
const http = require('http');

const server = http.createServer((request, response) => {
  // HTTP request ka response yaha handle hoga
});

const webSocketServer = new WebSocket({
  httpServer: server,
});

webSocketServer.on('request', (request) => {
  const connection = request.accept(null, request.origin);

  console.log('Client connected');

  connection.on('message', (message) => {
    console.log(`Received: ${message.utf8Data}`);
    connection.sendUTF(`You sent: ${message.utf8Data}`);
  });

  connection.on('close', (reasonCode, description) => {
    console.log('Client disconnected');
  });
});

server.listen(3001, () => {
  console.log('WebSocket server is running on ws://localhost:3001');
});
