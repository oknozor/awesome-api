require('systemd');
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})


// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to Greatest Hero of all time application. Browse your hero collection add more heroes."});
});

require('./app/routes/hero.route.js')(app);

//init mocks datas
require('./app/mocks/init.mock.js');

// listen for requests
app.listen('systemd'); 
 console.log('server started via systemd socket.'); 