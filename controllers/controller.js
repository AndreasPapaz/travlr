var express = require('express');
var router = express.Router();

var JournalDB = require('../model/JournalDB');

// TEST ROUTE
// router.use('*', function(req, res) {
// 	var dir = __dirname;
// 	var dirSplit = dir.split('controllers');
// 	dir = dirSplit[0];

// 	res.sendFile(dir + '/public/index.html');
// });

router.get('/', function(req, res) {
	Journal.find().exec(function(err, entry) {
		if (err) {
			console.log("err from logs " + err);
		}
		else {
			res.render(index.html);
		}
	});
});


module.exports = router;