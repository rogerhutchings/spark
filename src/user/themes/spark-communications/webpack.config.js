var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'js/index.js'),
  output: {
    path: path.resolve(__dirname, 'js-compiled'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          },
        },
      }
    ],
  }
};
