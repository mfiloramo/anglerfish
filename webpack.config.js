const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    '/client/index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      }
    ]
  },
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8084,
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    hot: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api/**': {
        target: 'http://localhost:3009',
        secure: false,
      },
      '/client/stylesheets/**': {
        target: 'http://localhost:3009',
        secure: false,
      }
    }
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    })
  ]
};