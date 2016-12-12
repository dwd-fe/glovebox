const path = require('path');
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
    resolve: {
        root: path.resolve(__dirname, 'src'),
        extensions: ['', '.ts', '.js'],
    },
    plugins: [
      new WebpackCleanupPlugin(),
      /*
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          drop_console: true,
          drop_debugger: true,
        },
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      */
    ],
    devtool: 'source-map',
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
            loaders: ['babel-loader', 'ts-loader?configFileName=tsconfig.prod.json'],
        }],
    },
    entry: [
        path.resolve(__dirname, 'src/index.ts'),
    ],
    node: {
      global: false,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs',
    },
};
