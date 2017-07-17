// var mongoose = require('mongoose');
// var passport = require('passport');
// var User = require('../model/User');

// var userController = {};

// //Restrict access to root page
// userController.home = function(req,res) {
// 	res.render('index', { user: req.user});
// };

// //go to register page
// userController.register = function(req, res) {
// 	res.render('register');
// };

// //Post new user
// userController.doRegister = function(req, res) {
// 	User.register(new User({email: req.body.email}), req.body.password, function(err, user) {
// 		if (err) {
// 			return res.render('register', {user:user});
// 		}
// 		passport.authenticate('local')(req, res, function() {
// 			res.redirect('/');
// 		});
// 	});
// };

// //Login page
// userController.login = funciton(req, res) {
// 	res.render('login');
// };

// //Post login
// userController.doLogin = function(req, res) {
// 	passport.authenticate('local')(req, res, funciton() {
// 		res.redirect('/');
// 	});
// };

// //logout
// userController.logout = function(req, res) {
// 	req.logout();
// 	res.redirect('/');
// };

// module.exports = userController;

var LocalStrategy = require('passport-local').Strategy
var User = require('../models/User');

module.exports = function(passport) {
	
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	//signup
	passport.use('local-signup', new LocalStrategy({
		email: 'email',
		password: 'password'
	}))
}







