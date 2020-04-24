const express = require('express')
const service = require('../services/user')
const router = express()

router.get('/me', service._get )

module.exports = router