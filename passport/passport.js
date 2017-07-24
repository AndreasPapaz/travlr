const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// var db = require("../models");
const User = require('../model/User');


passport.use(new LocalStrategy(
{
	usernameField: "email"
}, function(email, password, done) {

	User.findOne({
		email: email
	}).then(function(User) {
		if (!User) {
			console.log("not valid user");
			return done(null, false, {
				message: "no user found."
			});
		}
		else if (!User.validPassword(password)) {
			console.log("not valid password");
			return done(null, false, {
				message: "Incorrect password."
			});
		}
		return done(null, User);
	});
}));


passport.serializeUser(function(user, cb) {
	console.log('you are serialised user');
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;