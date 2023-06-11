const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
console.log("listening...");

wss.on('connection', ws => {
  console.log("Client connected");

  ws.on('message', message => {
    console.log('Received message => ', message.toString());
    ws.send('Received message => ' + message);
  });

  ws.send('Hello! Message from the WebSocket server!!');

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
