﻿var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    //output: {
    //    path: helpers.root('dist'),
    //    publicPath: 'http://localhost:8080/',
    //    filename: '[name].js',
    //    chunkFilename: '[id].chunk.js'
    //},

    //plugins: [
    //  new ExtractTextPlugin('./dest/[name].css')
    //],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});