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
// index route
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

///////////////////////////
// Export Router
///////////////////////////
module.exports = router