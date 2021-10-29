///////////////////////////
// Import Dependencies
///////////////////////////
const User = require("../models/user")
const express = require("express")
const bcrypt = require("bcryptjs")

///////////////////////////
// Create Router
///////////////////////////
const router = express.Router()

///////////////////////////
// Router Middleware
///////////////////////////

///////////////////////////
// Routes
///////////////////////////
// Sign Up routes
router.get("/signup", (req, res) => {
    res.render("user/signup.liquid")
})

router.post("/signup", async (req, res) => {
    // encrypt the password
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

    // create the user
    User.create(req.body)
    .then((newUser) => {
        res.redirect("/user/login")
    })
    .catch((error) => {
        res.json({error})
    })
})


// Login routes
router.get("/login", (req, res) => {
    res.render("user/login.liquid")
})

router.post("/login", (req, res) => {
    // grab username and password
    const {username, password} = req.body

    // check for user
    User.findOne({username})
    .then( async (user) => {
        // check if user exists
        if (user) {
            // compare passwords
            const result = await bcrypt.compare(password, user.password)

            // if password matches
            if (result) {
                // store data about session
                req.session.loggedIn = true
                req.session.username = username
                // redirect to pattern index page
                res.redirect("/patterns")
            }
            else {
                res.status(400).json({error: "Password does not match"})
            }
        }
        else {
            res.status(400).json({error: "User does not exist"})
        }
    })
    .catch((error) => {
        res.json({error})
    })
})

// logout route, get request to /user/logout
router.get("/logout", (req, res) => {
    // destroy the session
    req.session.destroy((err) => {
        // send user back to main page
        res.redirect("/")
    })
})

///////////////////////////
// Export Router
///////////////////////////
module.exports = router