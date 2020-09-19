const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const HmtlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HmtlWebpackPlugin({
            template: 'index.html',
            inject: 'head'
        })
    ],
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
        port: 8081
    }
})