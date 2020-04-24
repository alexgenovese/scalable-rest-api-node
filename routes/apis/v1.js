const userController = require('../../controller/user')

const express = require('express');
let router = express.Router();

// all the routes
router.use('/users', userController)
// router.use('/settings', settingsController)

module.exports = router;