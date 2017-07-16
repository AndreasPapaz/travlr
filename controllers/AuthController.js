var mongoose = require('mongoose');
var passport = require('passport');
var User = require('../model/User');

var userController = {};

//Restrict access to root page
userController.home = function(req,res) {
	res.render('index', { user: req.user});
};

//go to register page
userController.register = function(req, res) {
	res.render('register');
};

//Post new user
userController.doRegister = function(req, res) {
	User.register(new User({username: req.body.username, name: req.body.name}), req.body.password, function(err, user) {
		if (err) {
			return res.render('register', {user:user});
		}
		passport.authenticate('local')(req, res, function() {
			res.redirect('/');
		});
	});
};

//Login page
userController.login = funciton(req, res) {
	res.render('login');
};

//Post login
userController.doLogin = function(req, res) {
	passport.authenticate('local')(req, res, funciton() {
		res.redirect('/');
	});
};

//logout
userController.logout = function(req, res) {
	req.logout();
	res.redirect('/');
};

module.exports = userController;