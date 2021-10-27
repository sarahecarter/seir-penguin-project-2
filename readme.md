# Project 2
#### By Sarah Carter

## Project Summary

This project is an app for knitters. The app allows for the user to keep track of knitting patterns and projects they would like to knit up next! 

The project uses Express, MongoDB, and Mongoose to create a fully functional CRUD app that allows the user to add new patterns to their collection. Users will be able to edit, update, and delete the patterns from their collection as well.

## Models

- Pattern: represents the pattern that the user is saving to their collection.
    - Properties includes: title, designer, image, link, materials (yarn weight and needle size), and tags (ex: chunky, sweater, scarf, etc.)

## Route Table

| url | method | action |
|-----|--------|--------|
| /patterns | get | get all patterns (index)|
| /patterns/:id | get | get a particular pattern (show)|
| /patterns/new | get | renders form to save a new pattern (new)|
| /patterns | post | creates a new pattern (create)|
| /patterns/:id/edit | get | renders form to edit a particular pattern (edit)|
| /patterns/:id | put | updates a particular pattern (update)|
| /patterns/:id | delete | get a particular pattern (delete)|

## User Stories

Users will be able to add a new pattern to their collection by clicking the "Add New Pattern" button. This will bring them to a form that allows them to input the link to the pattern, an image of the knit, and the name and description. 

## Challenges

Stay tuned!

## List of Technologies

- Node.js and Express
- MongoDB and Mongoose
- HTML
- CSS
- jQuery

## Bonus Goals (if time permits)
- Add authorization to app. This would require adding a second User model. 
- Use jQuery to add filters on index page that allow the user to filter their saved patterns based on things like type of apparel, yarn weight, needle size, etc.