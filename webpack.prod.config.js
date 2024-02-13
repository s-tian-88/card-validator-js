const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CSSMinimizerWebpackPLugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({}),
      new CSSMinimizerWebpackPLugin({}),
    ],
  },
  devServer: {
    port: 9000,
  }
});
