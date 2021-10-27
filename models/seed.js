///////////////////////////
// Import Dependencies
///////////////////////////
const mongoose = require("./connection")
const Pattern = require("./patterns")
const starterPatterns = require("./starterPatterns")
///////////////////////////
// Seed Code
///////////////////////////

// save connection in a variable 
const db = mongoose.connection

db.on("open", () => {
    // delete all patterns to prevent duplicates
    Pattern.deleteMany({})
    .then((data) => {
        // seed the starter data
        Pattern.create(starterPatterns)
        .then(patterns => {
            console.log(patterns)
            db.close()
        })
    })
})