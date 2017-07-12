var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	googleId: {
		type: String,
		required: true
	},
	userCreated: {
		type: Date,
		default: Date.now
	},
});

module.exports = User;