// var express = require('express');
// var router = express.Router();
// var passport = express.Router();
// var User = require('./../model/User');


// router.post('/register', function(req, res) {

// 	console.log("this is post : " + req.body);

// 	var user = new User(req.body);

// 	user.save(function(err, doc) {
// 		if (err) {
// 			res.send(err);
// 		} else {
// 			res.send(doc);
// 		}
// 	});
// });


///i need to pass this though a method to authenticate route.
// router.post('register', passport.authenticate('local-login', {
// 	successRedirect: '/',
// 	failureRedirect: '/fail',
// 	failureFlash: true
// }));


// module.exports = router;

var path = require('path');
var User = require('./../model/User');

module.exports = function(app, passport) {

	app.post('/register', function(req, res) {

		console.log("this is post : " + req.body);

		var user = new User(req.body);

		user.save(function(err, doc) {
			if (err) {
				res.send(err);
			} else {
				res.send(doc);
			}
		});
	});

};

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/passrate');
	}
}