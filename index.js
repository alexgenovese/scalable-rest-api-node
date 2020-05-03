const server = require('./config/app')();

// create the basic server setup 
server.create();

//start the server
server.start();