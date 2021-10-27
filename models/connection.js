///////////////////////////
// Import Dependencies
///////////////////////////
const mongoose = require("mongoose")
require("dotenv").config()

///////////////////////////
// Establish Connection
///////////////////////////
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

// Connect to Mongo
mongoose.connect(DATABASE_URL, CONFIG)

// Connection messages
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

///////////////////////////
// Export connection
///////////////////////////
module.exports = mongoose