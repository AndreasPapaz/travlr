const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
var partials = require('express-partials');
// const passport = require('passport');
const passport = require('./passport/passport');
const PORT = process.env.PORT || 3000;

const config = require('./config');

// INIT EXPRESS
const app = express();

//MONGODB
var user = require('./model/User.js');
var mongoose = require('mongoose');
mongoose.Promise = Promise;

// mongoose.connect("mongodb://localhost/travlr");
mongoose.connect("mongodb://localhost/travlr");
var db = mongoose.connection;

db.on('error', function(error) {
	console.log("Mongoose error : " + error);
});

db.once('open', function() {
	console.log('Mongoose Connection Successful!');
});

// //Look for static files
// app.use('/static', express.static('./server/static'));
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

//Sessions
app.use(partials());

//Passport
app.use(session({ secret: 'travlr', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


//Routes
require('./controllers/user-api-routes.js')(app, passport);


// //start server
app.listen(PORT, function() {
	console.log('Listening on port : ' + PORT);
});