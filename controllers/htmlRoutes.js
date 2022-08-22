// only perform get requests in htmlRoutes (save rest of CRUD operations for api routes)
const router = require('express').Router();
const { User, DadJoke, Comment } = require('../models');
const withAuth = require('../utils/auth');
// route for getting homepage ;; DONE
router.get('/', async (req, res) => {
    try {
<<<<<<< HEAD
        res.render('homepage', {
            logged_in: req.session.logged_in
        })

=======
       res.render('homepage', {
        logged_in: req.session.logged_in
       })
>>>>>>> d042d98ca6e58c39dce045f14204a5a67b32d47e
    } catch (err) {
        res.status(500).json(err);
    }
});
// route for getting login/signup page ;; DONE
router.get('/login', async (req, res) => {
    try {
        if (req.session.logged_in) {
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
<<<<<<< HEAD
    // try {
    const dadJokeData = await DadJoke.findAll({
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ]
    });


    const dadJokes = dadJokeData.get({ plain: true });

    const dadJokes = dadJokeData.map(dadJoke => {
        return dadJoke.get({ plain: true })
    })

    res.render('jokepage', {
        dadJokes,
        logged_in: req.session.logged_in
    });

    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

// route for getting a single dad joke ;; DONE/*
/*router.get('/jokes/:id', withAuth, async (req, res) => {
=======
   // try {
        const dadJokeData = await DadJoke.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });
        const dadJokes = dadJokeData.map(dadJoke=>{
            return dadJoke.get({plain:true})
        })
        res.render('jokepage', {
            dadJokes,
            logged_in: req.session.logged_in
        });
   // } catch (err) {
   //     res.status(500).json(err);
   // }
});
// route for getting a single dad joke ;; DONE/*
router.get('/jokes/:id', withAuth, async (req, res) => {
>>>>>>> d042d98ca6e58c39dce045f14204a5a67b32d47e
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
<<<<<<< HEAD
        res.render('jokepage', {
=======
        console.log(dadJoke);
        res.render('singleJokePage', {
>>>>>>> d042d98ca6e58c39dce045f14204a5a67b32d47e
            ...dadJoke,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
<<<<<<< HEAD
});*/

// route for getting create dad jokes page ;; 
/*router.get('/create', withAuth, async (req, res) => {
=======
});
// route for getting create dad jokes page ;;
router.get('/create', withAuth, async (req, res) => {
>>>>>>> d042d98ca6e58c39dce045f14204a5a67b32d47e
    try {
        // TODO: add single object parameter for add joke
        res.render('add-joke', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
<<<<<<< HEAD
});*/

=======
});
>>>>>>> d042d98ca6e58c39dce045f14204a5a67b32d47e
module.exports = router;