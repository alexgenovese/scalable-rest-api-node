const config = require('../config/config')
const api_routing = require('./apis/v1')

const init = (server) => {

    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl)
        return next()
    });

    server.use( config.api.endpoint + config.api.version , api_routing)
}
module.exports = {
    init: init
};