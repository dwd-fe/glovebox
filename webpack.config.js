const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        root: path.resolve(__dirname, 'src'),
        extensions: ['', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
    ],
    devtool: 'source-map',
    cache: true,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel-loader'],
        }, {
            test: /\.glsl$/,
            loaders: ['es6-text-loader'],
        }, {
            test: /\.ts$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel-loader', 'ts-loader'],
        }],
    },
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'src/dev.ts'),
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
      port: process.env.PORT || 8080,
      host: '127.0.0.1',
      noInfo: false,
    },
    output: {
        path: path.resolve(__dirname, 'www'),
        filename: 'index.js',
    },
};
