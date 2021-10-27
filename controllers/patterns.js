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

// Edit route
router.get("/:id/edit", (req, res) => {
    const id = req.params.id

    // find pattern
    Pattern.findById(id)
    .then((pattern) => {
        // render edit form
        res.render("patterns/edit.liquid", {pattern})
    })
    .catch((error) => {
        res.json({error})
    })
})

// Update route
router.put("/:id", (req, res) => {

    // check if purchased is checked and convert property to true or false using ternary operator
    req.body.purchased = req.body.purchased === 'on' ? true : false
    const id = req.params.id

    // find and update pattern
    Pattern.findByIdAndUpdate(id, req.body, {new: true})
    .then((pattern) => {
        // redirect back to main list
        res.redirect("/patterns")
    })
    .catch((error) => {
        res.json({error})
    })
})

// Destroy route
router.delete("/:id", (req, res) => {
    const id = req.params.id

    // find and delete pattern
    Pattern.findByIdAndRemove(id)
    .then((pattern) => {
        // redirect back to main list
        res.redirect("/patterns")
    })
    .catch((error) => {
        res.json({error})
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