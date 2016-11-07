"use strict";

const path = require('path');
let base_dir = path.join(__dirname, 'myCompany');


module.exports = {
  context: path.join(base_dir, "myCompany/static/js/"),
  entry: {
    home: './home.js',
  },
  output: {
    path: path.join(base_dir, "myCompany/static/build"),
    filename: "js/[name].js"
  }
};
