const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const idProd = process.env.NODE_ENV === 'production';

const cssDev = ['style-loader', 'css-loader', 'sass-loader?sourceMap'];
const cssProd = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ['css-loader', 'sass-loader'],
    publicPath: "/dist"
});
const cssConfig = idProd ? cssProd : cssDev;

module.exports = {
    entry: './src/main/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
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
                test: /\.(jpe?g|gif|svg|png)$/i,
                use: [
                    //'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/',
                    'file-loader?name=[name].[ext]&outputPath=images/',
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader'
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
            title: 'Icons',
            //minify: {
            // collapseWhitespace: true
            //},
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