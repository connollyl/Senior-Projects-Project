const { resolve } = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common.config');

const config = (envObj) => {
  // Need empty env object to avoid plugins throwing an error
  // Seems like a binding issue and env is being set to undefined
  // Plugins don't need the env to be set to anything, just can't
  // be undefined
  // related: https://github.com/webpack/webpack/issues/2458
  const env = envObj || {};
  return {
    mode: 'development',

    entry: [
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      './src/index.js',
    ],
    devtool: 'cheap-module-eval-source-map',

    devServer: {
      hot: true,
      contentBase: resolve(__dirname, 'build'),
      historyApiFallback: true,
      open: true,
      overlay: true,
      publicPath: '/',
    },

    module: {
      ...common(env).module || {},
    },

    optimization: {
      ...common(env).optimization,
    },

    plugins: [
      ...common(env).plugins || [],
      new HtmlWebpackPlugin({
        inject: true,
        template: resolve(__dirname, 'build/index.html'),
        title: 'title', // TODO: get from some config to give better control -  not sure what this is for
      }),
      new webpack.LoaderOptionsPlugin({
        test: /\.jsx?$/,
        options: {
          eslint: {
            configFile: resolve(__dirname, '.eslintrc'),
            cache: false,
          },
        },
      }),
      new CleanWebpackPlugin(),
      // new webpack.optimize.ModuleConcatenationPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
      // new CompressionPlugin(),
      // new FlowBabelWebpackPlugin(),
    ],
  };
};

module.exports = (env) => {
  return Object.assign({}, common(env), config(env));
};
