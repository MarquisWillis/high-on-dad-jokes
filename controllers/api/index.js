const router = require('express').Router();
const dadJokesRoutes = require('./dadJokesRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/dad_jokes', dadJokesRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);

module.exports = router;