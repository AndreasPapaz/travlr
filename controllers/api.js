const express = require('express');

const app = new express.Router();

app.get('/dashboard', (req, res) => {
	res.status(200).json({
		message: "You are now authorized"
	});
});

module.exports = app;