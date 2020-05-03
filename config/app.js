const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const xss = require('xss-clean')

module.exports = function () {
    let server = express(),
        create,
        start;

    create = () => {
        let routes = require('../routes');
        // set all the server configurations
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);
        
        // add middleware security
        server.use(helmet())
        server.use(cors())
        server.use(cookieParser())
        server.use(morgan('combined', {
            skip: function (req, res) { return res.statusCode < 400 }
        }))
        // Data Sanitization against XSS attacks
        server.use(xss())

        // add middleware to parse the json
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({
            extended: false
        }))

        // Set up routes
        routes.init(server);
    };

    
    start = () => {
        let hostname = server.get('hostname'),
            port = server.get('port');
        server.listen(port, function () {
            console.log('Express server listening on - http://' + hostname + ':' + port + " - Env: " + config.env);
        });
    };
    return {
        create: create,
        start: start
    };
};