const config = require('../config/config')
const api_routing = require('./apis/v1')
const csrf = require('csurf')
const rateLimit = require('express-rate-limit')

const init = (server) => {

    server.use(csrf({cookie: true}))

    server.use(function (req, res, next) {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.locals.csrftoken = req.csrfToken();
        next();
    });

    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl)
        return next()
    });

    // Rate Limiting
    const limit = rateLimit({
        max: 100,// max requests
        windowMs: 60 * 60 * 1000, // 1 Hour of 'ban' / lockout 
        message: 'Too many requests' // message to send
    })

    server.use( config.api.endpoint + config.api.version , limit)
    
    server.use( config.api.endpoint + config.api.version , api_routing)
}
module.exports = {
    init: init
};