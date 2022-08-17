const router = require('express').Router();
const dadJokesRoutes = require('./dadJokesRoutes');

router.use('/dad_jokes', dadJokesRoutes);

module.exports = router;