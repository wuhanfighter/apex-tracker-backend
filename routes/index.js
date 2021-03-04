// module imports
const express = require('express')
const router = express.Router()

// disable index route
router.get('/', (req, res, next) => {
  res.redirect('/api/v1/profile')
});

// module export
module.exports = router
