const router = require('express').Router();
const { DadJoke } = require('../../models');
const withAuth = require('../../utils/auth')

// create new dad joke route
router.post('/', withAuth , async (req, res) => {
    try {
        const newDadJoke = await DadJoke.create({
            ...req.body,
            user_id: req.body.user_id,
        });

        res.status(201).json(newDadJoke)
    }
    catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router;