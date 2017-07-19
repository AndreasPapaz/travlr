var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/User');

module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	//Local signup
	passport.use('local-signup', new LocalStrategy({
		email: 'email',
		password: 'password',
		passReqToCallback: true //allows for a callback
	}, function(req, email, password, done) {
		process.nextTick(function() {
			User.findOne({ 'email' : email}, function(err, email) {
				if (err) {
					return done(err);
				}

				if (email) {
					console.log("email taken");
					return done(null, false, req.flash('signupMessage', 'That email is alredy taken.'));
				} else {
					var newUser = new User();
					newUser.email = email;
					newUser.password = newUser.generateHash(password);

					newUser.save(function(err) {
						if (err) {
							console.log("err from signup " + err);
						}
						return done(null, newUser);
					});
				}
			});
		});
	}));

	//mimic for login

}