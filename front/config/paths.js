const path = require('path');
const webpack = require('webpack');


module.exports = {
  src: path.resolve(__dirname, '../src'), // source files
  assets: path.resolve(__dirname, '../src/assets'), // assets files
  build: path.resolve(__dirname, '../dist'), // production build files
  static: path.resolve(__dirname, '../public'), // static files to copy to build folder
  /* video config */
  
};
