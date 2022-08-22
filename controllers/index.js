const router = require('express').Router();

const { application } = require('express');
const apiRoutes = require('./api');
const htmlRoutes = require('./htmlRoutes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;