///////////////////////////
// Import Dependencies
///////////////////////////
const mongoose = require("./connection")

///////////////////////////
// Create Pattern Model
///////////////////////////
const {Schema, model} = mongoose

const patternSchema = new Schema({
    name: String,
    designer: String,
    img: String, 
    description: String,
    yarnWeight: String, 
    needleSize: Number,
    purchased: Boolean,
    link: String,
    price: Number,
    tags: [String]
})

const Pattern = model("Pattern", patternSchema)

///////////////////////////
// Export Pattern Model
///////////////////////////
module.exports = Pattern