const config = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const xss = require('xss-clean')
const csrf = require('csurf')
const rateLimit = require('express-rate-limit')

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
        
        // add middlewares
        server.use(helmet())
        server.use(cors())
        server.use(cookieParser())
        server.use(csrf({cookie: true}))

        // Show in console all wrong requests
        server.use(morgan('combined', {
            skip: function (req, res) { return res.statusCode < 400 }
        }))

        // Set xsrf cookie
        server.use(function (req, res, next) {
            res.cookie(config.settings.cookie_csrf_name, req.csrfToken());
            res.locals.csrftoken = req.csrfToken();
            next();
        })
        
        // Data Sanitization against XSS attacks
        server.use(xss())
        
        // Rate Limiting for all requests
        const limit = rateLimit({
            max: 100,// max requests
            windowMs: 60 * 60 * 1000, // 1 Hour of 'ban' / lockout 
            message: 'Too many requests' // message to send
        })
        server.use(limit)

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