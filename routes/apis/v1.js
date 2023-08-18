const userController = require('../../controller/user')
const express = require('express')
const router = express.Router()

// all the routes
router.use('/user', userController)

module.exports = router;