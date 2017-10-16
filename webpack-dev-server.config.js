const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  entry: {
    main: [
      'webpack/hot/only-dev-server',
      './src/app/app.js',
    ],
  },
  devServer: {
    contentBase: 'src/www',
    hot: true, 
    inline: true,
    port: 3000,
    host: 'localhost', 
  },
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'build'), 
    filename: 'app.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
};

module.exports = config;
