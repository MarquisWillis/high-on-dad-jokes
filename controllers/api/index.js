const router = require('express').Router();
const dadJokesRoutes = require('./dadJokesRoutes');

router.use('/dad-jokes', dadJokesRoutes);

module.exports = router;