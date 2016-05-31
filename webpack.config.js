const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
require('dotenv').config();

const APP = path.join(__dirname, 'app');
const BUILD = path.join(__dirname, 'build');
const PUBLIC = path.join(__dirname, 'app/public');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = {
  entry: {
    app: ['babel-polyfill', APP]
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
        loaders: ['react-hot', 'babel-loader'],
        include: APP
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: BUILD,

    state: 'errors-only',

    host: HOST,
    port: PORT
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        CLIENT_ID: JSON.stringify(process.env.CLIENT_ID)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: PUBLIC, to: BUILD }
    ], { ignore: ['.DS_Store'] })
  ]
};
