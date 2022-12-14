const router = require('express').Router();
const { User } = require('../../models');

// route for creating user (DONT include withAuth)
// working
router.post('/', async (req, res) => {
    try {
        const newUserData = await User.create({
            ...req.body,
        })

        req.session.save(() => {
            req.session.user_id = newUserData.id
            req.session.logged_in = true
            res.status(200).json(newUserData);
        });       
    } 
    catch (err) {
        res.status(400).json(err);
    }
});

// working
router.post('/login', async (req, res) => {
   // try {
        // following code checks if email is valid
        const userData = await User.findOne({ where: { email: req.body.email} });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'User not found, please try again' });
            return;
        }


        // following code checks if password is valid
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'User not found, please try again' })
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Now logged in!'})
        });
    //} catch (error) {
    //    res.status(500).json(err);
    //}
});

// working
router.post('/logout', (req, res) => {

        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            })
        } else {
            res.status(404).end();
        }
});


module.exports = router;