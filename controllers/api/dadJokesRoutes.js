const router = require('express').Router();
const { DadJoke } = require('../../models');

// create new dad joke route
router.post('/', async (req, res) => {
    const newDadJoke = await DadJoke.create()
})

module.exports = router;