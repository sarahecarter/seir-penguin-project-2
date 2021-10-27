///////////////////////////
// Import Dependencies
///////////////////////////
const Pattern = require("../models/patterns")
const express = require("express")

///////////////////////////
// Create Router
///////////////////////////
const router = express.Router()

///////////////////////////
// Routes
///////////////////////////
// Index route
router.get("/", (req, res) => {
    // get all patterns 
    Pattern.find({})
    .then((patterns) => {
        // render the index template with patterns
        res.render("patterns/index.liquid", {patterns})
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// New route 
router.get("/new", (req, res) => {
    res.render("patterns/new.liquid")
})

// Create route 
router.post("/", (req, res) => {
    // check if purchased is checked and convert property to true or false using ternary operator
    req.body.purchased = req.body.purchased === 'on' ? true : false

    // add new pattern
    Pattern.create(req.body)
    .then((newPattern) => {
        // redirect user back to main list
        res.redirect("/patterns")
    })
})

// Show route
router.get("/:id", (req, res) => {
    const id = req.params.id

    // find pattern by id
    Pattern.findById(id)
    .then((pattern) => {
        // render show page for patter
        res.render("patterns/show.liquid", {pattern})
    })
})

///////////////////////////
// Export Router
///////////////////////////
module.exports = router