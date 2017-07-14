// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var passportLocalMongoose = require('passport-local-mongoose');
// // var bcrypt = require('bcrypt-nodejs');

// // BCRYPT AND MONGODB


// var User = new Schema({
// 	email: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 	},
// 	name: {
// 		type: String,
// 		required: true,
// 		unique: true,
// 		trime: true,
// 	},
// 	password: {
// 		type: String,
// 		required: true,
// 		trim: true
// 	},
// 	tocken: String
// });

// User.plugin(passportLocalMongoose);

// module.exports = User;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    email: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);