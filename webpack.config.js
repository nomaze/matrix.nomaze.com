// const path = require('path')
// const webpack = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ESLintPlugin = require('eslint-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

import path from 'path'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default env => {
    return {
        plugins: [
            new MiniCssExtractPlugin({
                // filename: '[name].bundle.css',
                // chunkFilename: '[id].css'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new ESLintPlugin({
                extensions: ['js', 'jsx']
            }),
            new HtmlWebpackPlugin({
                inject: true,
                template: path.resolve(__dirname, 'public', 'index.html'),
            })
        ],
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'dist')
            },
            open: true,
            port: 9000,
            historyApiFallback: true,
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.(jsx|js)$/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    "targets": "defaults"
                                }],
                                '@babel/preset-react'
                            ]
                        }
                    }]
                },
                {
                    test: /\.css$/i,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // hmr: env.NODE_ENV === 'development',
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 0
                            }
                        }
                    ]
                }
            ]
        }
    }
}
