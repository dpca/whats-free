const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
require('dotenv').config();

const APP = path.join(__dirname, 'app');
const BUILD = path.join(__dirname, 'build');
const PUBLIC = path.join(__dirname, 'app/public');

const PACKAGE = Object.keys(
  require('./package.json').dependencies
);

module.exports = {
  entry: {
    app: ['babel-polyfill', APP],
  },

  output: {
    path: BUILD,
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: APP
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        CLIENT_ID: JSON.stringify(process.env.CLIENT_ID)
      }
    }),

    new CleanWebpackPlugin([BUILD]),

    new CopyWebpackPlugin([
      { from: PUBLIC, to: BUILD }
    ], { ignore: ['.DS_Store'] }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
