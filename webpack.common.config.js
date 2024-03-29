const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'src', 'index.html'),
      },
    ),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

};
