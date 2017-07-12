var express = require('express');
var passport = require('passport');
var User = require('../model/User');

// INIT EXPRESS ROUTER
var router = express.Router();


// GET Route for google auth
router.get('/auth/google', passport.authenticate('google', {
	scope: ['openid email profile']
}));

// Get route for Google Auth CB
router.get('/auth/google/callback', passport.authenticate('google', {
	failureRedirect: '/login'
}),
	function(req, res) {
		module.exports.loggedIn = true;

		User.findOne({
			'googleId': profile.id
		}, function(err, user) {
			if(err) {
				return done(err);
			}
			// NO USER WAS FOUND, CREATE NEW USER
			if (!user) {
				user = new User({
					googleId: req.user.id
				});
				user.save(function(err) {
					if (err) {
						console.log(err);
					}
					return done(err, user);
				});
			} else {
				//found user
				return done(err, user);
			}
		});
	}
);

//VERIFY AUTH
router.get('/api/verify', function(req, res) {
	if (req.isAuthenticated()) {
		res.json(
		{
			auth: req.isAuthenticated(),
			googleId: req.user.id
		});
	} 
	else {
		res.json({ auth: false });
	}
});

// LOGOUT ROUTE
router.get('/api/logout', function(req, res) {
	module.exports.loggedIn = false;
	req.logout();
	res.redirect('/logged-out');
});

module.exports = router;