// let webpack = require('webpack');

module.exports = {

  // This code will be compiled
  entry: "./app/app.js",

  // Then output into this file
  output: {
    filename: "public/bundle.js"
  },

  // This will be what we do
    module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // only process files in app folder
        include: /app/,
        loader: 'babel-loader',
        query: {
          // transformations
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}