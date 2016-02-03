var webpack = require('webpack');
var package = require("./package.json");
var entry = package.entry;
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: entry,
  output: {
    path: __dirname,
    filename: '[name].js' // Template based on keys in entry above
  },
  module: {
    loaders: [{
      test: /\.js(x?)$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.less$/,
      loader: "style!css!less"
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png"
    }]
  },
  plugins: [commonsPlugin]
};
