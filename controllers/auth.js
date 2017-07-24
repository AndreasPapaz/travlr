// const express = require('express');
const validator = require('validator');
// const passport = require('passport');

// const app = new express.Router();


module.exports = function(app, passport) {

	function validateLoginForm(payload) {

		console.log('this is login payload : ' + payload.email);

	  const errors = {};
	  let isFormValid = true;
	  let message = '';

	  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
	    isFormValid = false;
	    errors.email = 'Please provide your email address.';
	  }

	  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
	    isFormValid = false;
	    errors.password = 'Please provide your password.';
	  }

	  if (!isFormValid) {
	    message = 'Check the form for errors.';
	  }

	  return {
	    success: isFormValid,
	    message,
	    errors
	  };
	}



	function validateSignupForm(payload) {

		// console.log("payload func : " + payload.email);

	  const errors = {};
	  let isFormValid = true;
	  let message = '';

	  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
	    isFormValid = false;
	    errors.email = 'Please provide a correct email address.';
	    console.log("email error");
	  }

	  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
	    isFormValid = false;
	    errors.password = 'Password must have at least 8 characters.';
	    console.log("password error");
	  }

	  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
	    isFormValid = false;
	    errors.name = 'Please provide your name.';
	    console.log("name error");
	  }

	  if (!isFormValid) {
	    message = 'Check the form for errors.';
	  }

	  return {
	    success: isFormValid,
	    message,
	    errors
	  };
	}



	app.post('/signup', (req, res, next) => {

		// console.log('this is from the signup path : ' + req.body.password);

		const validationResult = validateSignupForm(req.body);

		if (!validationResult.success) {
			return res.status(400).json({
				sucuess: false,
				message: validationResult.message,
				errors: validationResult.errors
			});
		}

		return passport.authenticate('local-signup', (err) => {
			if(err) {
				if (err.name === 'MongoError' && err.code === 11000) {
					//11000 = mongo code is duplication email
					/// 409 HTTP is conflic code
					return res.status(409).json({
						success: false,
						message: 'Check the form for err',
						errors: {
							email: 'This email is taken'
						}
					});
				}

				return res.status(400).json({
					success: false,
					message: 'Could not process the form'
				});
			}
			return res.status(200).json({
				sucess: true,
				message: 'you have successfully signed up. Log in to start your Travlr'
			});
		})(req, res, next);
	});



	app.post('/login', (req, res, next) => {

		// console.log('this is from the login path : ' + req.body.email);


		// const validationResult = validateLoginForm(req.body);
		// if(!validationResult.sucess) {
		// 	console.log('invalid calidation results');
		// 	return res.status(400).json({
		// 		sucess: false,
		// 		message: validationResult.message,
		// 		errors: validationResult.errors
		// 	});
		// }

		return passport.authenticate('local-login', (err, token, userData) => {
			if (err) {
				if (err.name === 'IncorrectCredentialsError') {
					return res.status(400).json({
						success: false,
						message: err.message
					});
				}
				return res.status(400).json({
					sucess: false,
					messag: 'could not process the form'
				});
			}

			return res.json({
				success: true,
				message: 'you have logged in',
				token,
				user: userData
			});
		})(req, res, next);
	});



	app.get('/profile', (req, res, next) => {
		console.log('this is the profile tr');

		console.log("data : " + req);

	});


}


// module.exports = app;


