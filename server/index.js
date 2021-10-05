const http = require('http');
const app = require('./app');
const port = 8080;

// create server
const server = http.createServer(app);

server.listen(port);