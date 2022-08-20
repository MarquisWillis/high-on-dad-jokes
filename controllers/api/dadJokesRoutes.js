const router = require('express').Router();
const { DadJoke, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth')

// routes for getting all dad jokes
router.get('/', async (req, res) => {
    try {
        const dadJokes = await DadJoke.findAll({
            include: [{
                model: Comment,
                through: User
            }]
        });
        res.status(201).json(dadJokes);
    } catch (err) {
        res.status(500).json(err);
    }
})

// routes for getting one dad joke by id
router.get('/:id', async (req, res) => {
    try {

        const dadJoke = await DadJoke.findByPk(req.params.id, {
            include: [{
                model: Comment,
                through: User
            }]
        });
        res.status(201).json(dadJoke);

    } catch (err) {
        res.status(500).json(err);
    }
})

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