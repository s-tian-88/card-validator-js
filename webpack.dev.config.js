const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.ProgressPlugin(),
  ],
});
