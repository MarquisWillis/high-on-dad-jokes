// only perform get requests in htmlRoutes (save rest of CRUD operations for api routes)
const router = require('express').Router();
const { User, DadJoke, Comment } = require('../models');
const withAuth = require('../utils/auth');


// route for getting homepage ;; DONE 
router.get('/', async (req, res) => {
    try {
       res.render('homepage', {
        logged_in: req.session.logged_in
       }) 

    } catch (err) {
        res.status(500).json(err);
    }
});


// route for getting login/signup page ;; DONE
router.get('/login', async (req, res) => {
    try {
        if(req.session.logged_in) {
            res.redirect('/');
            return;
        }
        // TODO: add single object parameter for add joke
        res.render('login', {

        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// route for getting all dad jokes page ;; DONE
router.get('/jokes', async (req, res) => {
    try {
        const dadJokeData = await DadJoke.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });

        const dadJokes = dadJokeData.get({plain : true});

        res.render('jokepage', {
            ...dadJokes,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// route for getting a single dad joke ;; DONE/*
/*router.get('/jokes/:id', withAuth, async (req, res) => {
    try {
        const dadJokeData = await DadJoke.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Comment,
                    attributes:['comment']
                }
            ]
        });

        const dadJoke = dadJokeData.get({ plain: true });

        res.render('jokepage', {
            ...dadJoke,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});*/

// route for getting create dad jokes page ;; 
/*router.get('/create', withAuth, async (req, res) => {
    try {
        // TODO: add single object parameter for add joke
        res.render('add-joke', {

        });
    } catch (err) {
        res.status(500).json(err);
    }
});*/

module.exports = router;