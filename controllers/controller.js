var path = require('path');
var User = require('./../model/User');

module.exports = function(app, passport) {


	app.post('/dashboard', passport.authenticate('local', function(req, res) {
		console.log("they are loggedin memebers");
	}));

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