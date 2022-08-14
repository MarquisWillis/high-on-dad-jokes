// only perform get requests in htmlRoutes (save rest of CRUD operations for api routes)
const router = require('express').Router();
const { DadJoke } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
});