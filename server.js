var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var PORT = process.env.PORT || 3000;

// INIT EXPRESS
var app = express();

//MONGODB
var user = require('./model/User.js');
var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/travlr");
var db = mongoose.connection;

db.on('error', function(error) {
	console.log("Mongoose error : " + error);
});

db.once('open', function() {
	console.log('Mongoose Connection Successful!');
});

//Middleware set up
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(require('connect-multiparty')());
// app.use(session({secret: 'super-secret'}));
app.use(cookieParser());
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(express.static(__dirname + '/public'));


// Passport
// app.use(session({ secret: "travlr", resave: true, saveUninitialized: true }));

// passport.use(user.createStrategy());
// passport.serializeUser(user.serializeUser());
// passport.deserializeUser(user.deserializeUser());
require('./controllers/passport.js')(passport);
app.use(passport.initialize());
app.use(passport.session());

//Routes
var routes = require('./controllers/controller');
app.use('/', routes);

//start server
app.listen(PORT, function() {
	console.log('Listening on port : ' + PORT);
});


