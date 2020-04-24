const server = require('./config/app')();
const config = require('./config/config');

// create the basic server setup 
server.create(config);

//start the server
server.start();