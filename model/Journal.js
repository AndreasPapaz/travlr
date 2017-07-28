const moment = require('moment');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define the User model schema
const JournalSchema = new Schema({
  img: {
    type: String
  },
  user: {
    type: String
  },
  title: {
    type: String
  },
  body: {
    type: String
  },
  location: {
  	type: String
  },
  geoCode: {
    type: String
  },
  Date: {
  	type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Journal', JournalSchema);