var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	email: {
		type: String,
		trime: true,
		required: true,
		unique: true
	},
	password: {
		type: String,
		trim: true,
		required: true
	},
	imageLink: {
		type: String,
		trim: true
	}
});

UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

// var User = mongoose.model('User', UserSchema);

// module.exports = User;

module.exports = mongoose.model('User', UserSchema);