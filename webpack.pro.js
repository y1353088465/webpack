const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        common: './src/common.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        // new CleanWebpackPlugin(["development"]),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'development')
    }
};
