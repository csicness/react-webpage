const webpack = require('webpack'),
        path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
        {
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'] 
        }
    ]
  },
  resolve: {
      extension: ['', '.js', '.jsx', '.scss']
  }
};

// Todo -----------> Setup enviroments for production and development <-----------------------------

/*
const ExtractTextPlugin = require('extract-text-webpack-plugin');

  plugins: [
    new ExtractTextPlugin('style.css', {
        allChunks: true
    })
  ],
  module: {
    loaders: [
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass') 
        }
*/

