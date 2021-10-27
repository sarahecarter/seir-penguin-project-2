///////////////////////////
// Import Dependencies
///////////////////////////
const express = require("express")
const path = require('path')
require('dotenv').config()
const methodOverride = require("method-override")
const morgan = require('morgan')
const mongoose = require('mongoose')
const PatternRouter = require("./controllers/patterns")

// Construct an absolute path to the views folder
const viewsFolder = path.resolve(__dirname, "views/")

// Creates an app object with liquid, passing the path to the views folder
const app = require('liquid-express-views')(express(), {root: viewsFolder})


///////////////////////////
// Middleware
///////////////////////////
// use method override to override post requests on forms
app.use(methodOverride("_method"))
// parses incoming request bodies
app.use(express.urlencoded({extended: true}))
// serve static files
app.use(express.static("public"))
// use morgan logger
app.use(morgan("tiny"))

///////////////////////////
// Routes
///////////////////////////
// route
app.get("/", (req, res) => {
    res.send("This App is working")
})

// Register router
app.use("/patterns", PatternRouter)


///////////////////////////
// Listener
///////////////////////////
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))