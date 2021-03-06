const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const idProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
});

const cssConfig = idProd ? cssProd : cssDev;

module.exports = {
  entry: {
    app: './src/main/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loader: 'url-loader?limit=4000&name=images/[name].[ext]',
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|ttf|woff(2)?)$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: 10000,
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    hot: true,
    stats: 'errors-only',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Icon generator',
      hash: true,
      template: './src/public/index.html',
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: !idProd,
      allChunks: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
