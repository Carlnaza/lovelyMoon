const router = require('express').Router;

router.use('/api', require('./collectionControllers.js'))
router.use('/api', require('./productControllers.js'))
router.use('/api', require('./orderControllers.js'))
router.use('/api', require('./userControllers.js'))

module.exports = router