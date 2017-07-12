const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const idProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", "sass-loader"],
});

const cssConfig = idProd ? cssProd : cssDev;

module.exports = {
    entry: {
        app: './src/main/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: cssConfig
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                loader: 'url-loader?limit=10000&name=images/[hash:12].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|ttf|woff(2)?)$/,
                loader: 'url-loader',
                options: {
                    // limit: 100000,
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        stats: "errors-only",
        // open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Web pack Application',
            hash: true,
            template: './src/public/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: !idProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
}