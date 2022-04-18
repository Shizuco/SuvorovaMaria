const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry:__dirname + "/src/index.js",
 output: {
    path: __dirname + "/dist",
    filename: '[name].bundle.js',
    publicPath: "/",
    }, 
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/pages/index.html'), //шаблон
        filename: 'index.html', // ім'я вихідного файлу
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname,'./src/pages/about.html'),
            filename: 'about.html',
        })
        ],
} 