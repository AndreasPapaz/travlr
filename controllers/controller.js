var express = require('express');
var router = express.Router();

var Journal = require('../model/Journal');

// TEST ROUTE
router.use('*', function(req, res) {
	var dir = __dirname;
	var dirSplit = dir.split('controllers');
	dir = dirSplit[0];

	res.sendFile(dir + '/public/index.html');
});

module.exports = router;