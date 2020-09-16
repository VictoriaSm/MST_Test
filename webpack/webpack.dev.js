const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const paths = require('./paths');
const rules = require('./rules');

module.exports = {
    mode: 'development',
    entry: paths.entryPath,
    output: {
        filename: '[name].js',
        path: paths.outputPath
    },
    devtool: 'source-map',
    module: {
        rules
    },
    resolve: {
        modules: [paths.sourcePath, 'node_modules'],
        extensions: ['*', '.js', '.scss'],
        alias: {
            store: paths.store,
        },
    },
    devServer: {
        contentBase: paths.outputPath,
        compress: true,
        hot: true,
        open: true,
        historyApiFallback: true,
        host: '192.168.31.172',
        port: 3000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: paths.templatePath
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
    ],
}
