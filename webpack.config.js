const { Configuration, ProgressPlugin } = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist.js',
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'awesome-typescript-loader' }],
  },
  plugins: [
    new ProgressPlugin({}),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

module.exports = config;
