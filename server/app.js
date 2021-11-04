// import files and packages up here

// Pulling in the express framework
const express = require('express'); 

// Pulling in morgan
const morgan = require('morgan');

// Importing json data from the specified file
var data = require('./data.json');

// Creates an express instance
const app = express();

// add your routes and middleware below

// Apply middelware
app.use(morgan('dev'));

// Route handler for requests to /
app.get('/', function(req, res) {
    res.status(200);
    res.sendFile('/Users/kennethlapid/SDTopSpots/web102-san-diego-top-spots/index.html')
});

// Route handler for requests to data/
app.get('/data', function(req, res) {
    res.status(200);
    res.json(data);
});

// finally export the express application
module.exports = app;
