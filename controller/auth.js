const config = require('config')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {

        if(req.headers.hasOwnProperty(config.settings.csrfToken_name) || req.cookies.hasOwnProperty(config.settings.csrfToken_name)){
            res.status(401).json({ response: false, message: 'UNAUTHORIZED REQUEST!' })
            return;
        }

        if ( req.headers[config.settings.csrfToken_name].toString() != req.cookies[config.settings.csrfToken_name].toString() ) {
            res.status(401).json({ response: false, message: 'UNAUTHORIZED REQUEST!' })
            return;
        }

        next()

    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
}