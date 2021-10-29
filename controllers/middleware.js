const auth = (req, res, next) => {
    // check if user is logged in
    if (req.session.loggedIn) {
        // send to routes
        next();
    }
    // send to log in page if not logged in
    else {
        res.redirect("/user/login")
    }
}

module.exports = {auth}