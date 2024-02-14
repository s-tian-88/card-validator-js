const { merge } = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CSSMinimizerWebpackPLugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common.config');

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
  },
});
