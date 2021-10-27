///////////////////////////
// Import Dependencies
///////////////////////////
const mongoose = require("./connection")
const Pattern = require("./patterns")
const starterPatterns = required("./starterPatterns")
///////////////////////////
// Seed Code
///////////////////////////

// save connection in a variable 
const db = mongoose.connection

db.on("open", () => {

})