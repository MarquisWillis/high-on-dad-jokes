// authorization function that redirects user to login page when attempting to proceed without login
// otherwise, allow user to proceed to the desired page
function withAuth(req, res, next) {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;