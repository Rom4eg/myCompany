"use strict";

const path = require('path');
const base_dir = __dirname;
const project_dir = path.join(base_dir, 'myCompany');
let webpack = require("webpack");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  context: path.join(project_dir, "myCompany/static/js/"),
  entry: {
    dashboard: './dashboard.js',
    rules: './rules.js',
    events: './events.js',
    employees: './employees.js',
    auth: './auth.js',
  },
  output: {
    path: path.join(project_dir, "myCompany/static/build"),
    filename: "js/[name].js"
  },

  resolveLoader: {
    root: path.join(base_dir, 'node_modules')
  },

  watch: true,
  resolve:{
    extensions: ['', '.js', '.sass'],
    alias:{
      jquery: path.join(base_dir,"node_modules/foundation-sites/vendor/jquery/dist/jquery.js"),
      moment: path.join(base_dir,"node_modules/moment/moment.js"),
      utils: path.join(project_dir,"myCompany/static/js/utils.js")
    }
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
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
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    }),
    new CopyWebpackPlugin([{
        from: "../fonts",
        to: "../build/fonts"
      }
    ])
  ]
};
