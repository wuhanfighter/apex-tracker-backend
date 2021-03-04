// module imports
var express = require('express')
var router = express.Router()

// controller import
const profile_controller = require('../../controllers/profileController')

// user details route
router.get('/:platform/:gamertag', profile_controller.detail)

// module export
module.exports = router
