# Project 2
## Knifty
#### By Sarah Carter

## Project Summary

This project is a pattern tracking app for knitters. As a knitter myself I am constantly seeing new patterns on different platforms but have no way to save them all in one place so that I can find and purchase them later. This app allows for knitters to save patterns to a collection so that they can find them later.

This project uses Express, MongoDB, and Mongoose to create a fully functional CRUD app that allows the user to add new patterns to their collection. Users are able to edit, update, and delete the patterns from their collection as well.

## Models

- Pattern: represents the pattern that the user is saving to their collection.
    - Properties include: title, designer, image, link, materials (yarn weight and needle size), and tags (ex: chunky, sweater, scarf, etc.)
    - This model also includes a username property that allows patterns to be saved specifically to a user account.

- User: represents the user account 
    - Properties include username and password.

## Route Tables

#### Pattern
| url | method | action |
|-----|--------|--------|
| /patterns | get | Get all patterns (index)|
| /patterns/:id | get | Get a particular pattern (show)|
| /patterns/new | get | Renders form to save a new pattern (new)|
| /patterns | post | Creates a new pattern (create)|
| /patterns/:id/edit | get | Renders form to edit a particular pattern (edit)|
| /patterns/:id | put | Updates a particular pattern (update)|
| /patterns/:id | delete | Deletes a particular pattern (delete)|

#### User
| url | method | action |
|-----|--------|--------|
| / | get | Main site homepage |
| /user/signup | get | Renders signup page to create a new account|
| /user/signup | post | Creates a new user |
| /user/login | get | Renders login page |
| /user/login | post | Sends user login data to be validated |
| /user/logout | get | Destroys sesssion and redirects user to main homepage |


## User Stories

Users will be able to add a new pattern to their collection by clicking the "+" button. A new form will then be rendered that allows the user to input pattern details. On the form, when the user clicks "Add New Pattern" they will be taken back to their main collection page where their pattern has been added 

## Challenges

- When styling, I realized that I wanted to change the layouts of the modals and project cards in larger screens from a one column to two column format. To achieve this I needed to switch from using Flexbox to CSS Grid and `gris-areas` to create the specific layout I wanted.
- When creating the filters based on tags, I wasn't sure how to go about getting the tag data onto the patterns in the index page. I didn't want to list the tags on the pattern cards since aesthetically I only wanted the title, image, and the edit and delete icons. I was able to work around adding them by instead adding the tags as classes on the cards instead. When clicking the filter links, jQuery is used to loop through the patterns and check if they have a class that matches the filter link.

## List of Technologies

- Node.js and Express
- MongoDB and Mongoose
- HTML
- CSS
- jQuery

## Bonus Features
- I added user authentication and authorization to the app. To accomplish this I added a user model and utilized bcrypt.js to hash passwords and connect-mongo to keep track of session data. 
- I used jQuery to add filters on the pattern index page that allow the user to filter their saved patterns based on popular tags like Beginner, Chunky, and Sweater.
- I also used jQuery to add search functionality to the pattern index page. Clicking the search icon reveals the search input which can be used to search for pattern titles.