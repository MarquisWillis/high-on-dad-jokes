// only perform get requests in htmlRoutes (save rest of CRUD operations for api routes)
const router = require('express').Router();
const { User, DadJoke, Comment } = require('../models');
const withAuth = require('../utils/auth');


// route for getting homepage
router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
});

// route for getting login