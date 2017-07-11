var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var PORT = process.env.PORT || 3000;

// SET MONGOOSE TO LEVERAGE BUILT IN JS ES6 PROMOISES
mongoose.Promise = Promise;

// INIT EXPRESS
var app = express();

// USE MORGAN AND BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
// make public a static dir
app.use(express.static('public'));

// DB config w/ mongoose
// mongoose.connect("MONGO LAB GOES HERE");
mongoose.connect("mongodb://localhost/travlr");
var db = mongoose.connection;

db.on('error', function(error) {
	console.log("Mongoose error : " + error);
});

db.once('open', function() {
	console.log('Mongoose Connection Successful!');
});

// Routes
var routes = require('./controllers/controller');
app.use('/', routes);

// Listen on Port
app.listen(PORT, function() {
	console.log('App running on port ' + PORT);
});