// THIS IS WHERE WE ARE GOING TO MAKE API CALLS
// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
// var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";
var geocodeAPI = "fec6e6a2a52e4e14929cca635f73738e";

// Helper functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(location) {

    // Figure out the geolocation
    var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" +
      location + "&pretty=1&key=" + geocodeAPI;

    return axios.get(queryURL).then(function(res) {
      return res.data.results[0].components;
    });
  }
};

module.exports = helpers;

