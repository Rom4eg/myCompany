"use strict";

const path = require('path');
const base_dir = path.join(__dirname, 'myCompany');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

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

  watch: true,
  resolve:{
    extensions: ['', '.js', '.sass']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel'
    },{
      test: /\.sass$/,
      exclude:/(node_modules)/,
      loader: ExtractTextPlugin.extract('style-loader', "css-loader!sass-loader")
    }]
  },

  plugins: [
    new ExtractTextPlugin("css/[name].css", {
      allChunks: true
    }),
  ]
};
