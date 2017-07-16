var express = require('express');
var router = express.Router();
var passport = express.Router();
var User = require('./../model/User');


router.post('/register', function(req, res) {

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

module.exports = router;