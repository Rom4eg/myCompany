"use strict";

const path = require('path');
const base_dir = path.join(__dirname, 'myCompany');

module.exports = {
  context: path.join(base_dir, "myCompany/static/js/"),
  entry: {
    home: './home.js',
  },
  output: {
    path: path.join(base_dir, "myCompany/static/build"),
    filename: "js/[name].js"
  },

  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel'
    }]
  }
};
