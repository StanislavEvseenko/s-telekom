const { merge } = require('webpack-merge');
const BASE = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(BASE, {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.dev.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3300,
    hot: true,
    open: true
  }
});