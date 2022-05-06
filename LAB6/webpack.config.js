const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'production',
    entry:__dirname + "/src/index.js",
 output: {
    path: __dirname + "/dist",
    filename: '[name].bundle.js',
    publicPath: "/",
    }, 
    devServer: {
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/pages/index.html'), //шаблон
            filename: 'index.html', // ім'я вихідного файлу
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname,'./src/pages/raspisanie.html'),
            filename: 'raspisanie.html',
        }),
        new HtmlWebpackPlugin({
             title: 'webpack Boilerplate',
             template: path.resolve(__dirname, './src/pages/photo.html'), //шаблон
             filename: 'photo.html', // ім'я вихідного файлу
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/pages/news.html'), //шаблон
            filename: 'news.html', // ім'я вихідного файлу
        }),
        new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: path.resolve(__dirname, './src/pages/slider.html'), //шаблон
          filename: 'slider.html', // ім'я вихідного файлу
      }),
        new CopyPlugin({
            patterns: [
              {
                from: "src/img/photo_2022-02-20_14-55-39.jpg",
                to: "img",
              },
              {
                from: "src/img/photo_2022-04-21_08-55-18.jpg",
                to: "img",
              },
              {
                from: "src/img/photo_2022-04-21_08-55-40.jpg",
                to: "img",
              },
              {
                from: "src/img/photo_2022-04-21_08-55-43.jpg",
                to: "img",
              },
              {
                from: "src/img/photo_2022-04-21_09-22-50.jpg",
                to: "img",
              },
            ],
          }),
        ],
        module: {
          rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
          ],
        },
} 