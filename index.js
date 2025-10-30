// Setting up our express and ejs
var express = require('express');
var ejs = require('ejs');

// Creating the app objects
const app = express();
const port = 8000;

// Telling express to use ejs as the view engine
app.set('view engine', 'ejs');

// Telling express to use css file
app.use(express.static('public'));

// Setting up the body parser
app.use(express.urlencoded({ extended: true }));

// Loading our route handlers
const mainRoutes = require('./routes/main.js');
app.use('/', mainRoutes);

// Starting the web app listening
app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`));

