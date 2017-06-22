var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var idProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", "sass-loader"],
});

var cssConfig = idProd ? cssProd : cssDev;

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
                loader: 'file-loader',
                options: {
                    // limit: 40000,
                    name: 'images/[name].[ext]'
                }
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