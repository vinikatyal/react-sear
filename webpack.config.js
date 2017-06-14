/*
    ./webpack.config.js
*/
const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    rules: [{
      test: /app.*\.html$/,
      loader: "html-loader?removeRedundantAttributes=false"
    }, {
      test: /app.*\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
          plugins: ['react-html-attrs', "transform-object-assign"],
        }
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.png$/,
      loader: 'url-loader?mimetype=image/png'
    }, {
      test: /\.jpg$/,
      loader: 'file-loader'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  resolve: {
    modules: [
      path.join(__dirname, '/'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  plugins: [HtmlWebpackPluginConfig]
}