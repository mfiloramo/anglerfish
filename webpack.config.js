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
      {  // STATIC ASSETS LOADERS FOR PAGE STYLING
        test: /.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        // THIS CAN ALSO BE EXPRESSED USING MODULAR SYNTAX -- SEE BELOW
        //     use: [{
        //       loader: 'style-loader', // INJECTS CSS TO PAGE
        //     }, {
        //       loader: 'css-loader', // TRANSLATES CSS INTO CommonJS MODULES
        //     }, {
        //       loader: 'postcss-loader', // RUN POST CSS ACTIONS
        //     }, {
        //       loader: 'sass-loader', // COMPILE SASS TO CSS
        //     }]
        //   },
      }
    ]
  },

  mode: 'development',

  devServer: {
    host: 'localhost',
    port: 8083,
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    hot: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api/**': {
        target: 'http://localhost:3002',
        secure: false,
      },
      '/assets/**': {
        target: 'http://localhost:3002',
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