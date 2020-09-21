const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'Richeditor.js',
        path: path.resolve(__dirname, 'dist'),
        library: "Richeditor",
        libraryTarget: "umd",
        libraryExport: 'default'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
})