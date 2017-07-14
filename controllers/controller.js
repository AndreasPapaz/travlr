var express = require('express');
var router = express.Router();
var passport = express.Router();
var User = require('./../model/User');


router.post('/register', function(req, res) {
	User.register(new User({
		email: req.body.email
	}), req.body.password, function(err, user) {
		if (err) {
			console.log(err);
			res.send('User exists');
		} else {
			res.sender(user._id);
		}
	});
});

module.exports = router;