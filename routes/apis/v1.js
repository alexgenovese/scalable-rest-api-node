const userController = require('../../controller/user')
const express = require('express')
const router = express.Router()
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })

// all the routes
router.use('/users', csrfProtection, userController)

module.exports = router;