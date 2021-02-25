const { resolve } = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = (envObj) => {
  // Need empty env object to avoid plugins throwing an error
  // Seems like a binding issue and env is being set to undefined
  // Plugins don't need the env to be set to anything, just can't
  // be undefined
  // related: https://github.com/webpack/webpack/issues/2458
  const env = envObj || {};
  // Tell webpack to assign real values to env props so
  // we can use them in our FE components
  // https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5
  const envKeys = Object.keys(env).reduce((prev, next) => {
    // eslint-disable-next-line no-param-reassign
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  envKeys['process.env.INIT_CWD'] = JSON.stringify(process.env.INIT_CWD);
  const isEnvProduction = process.env.NODE_ENV === 'production';
  return {
    context: resolve(__dirname, process.env.INIT_CWD),
    output: {
      filename: '[name].js',
      chunkFilename: `[name].chunk.${Date.now()}.js`,
      path: resolve(process.env.INIT_CWD, 'dist/'),
      publicPath: '/',
    },

    optimization: {
      usedExports: true, // tree shaking clues
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            // sync + async chunks
            chunks: 'all',
            // import file path containing node_modules
            test: /node_modules/,
            enforce: true,
          },
        },
      },
    },

    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            configFile: './.eslintrc',
          },
        },
        {
          test: /\.(js|jsx)$/,
          use: 'react-hot-loader/webpack',
          include: /node_modules/,
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            customize: require.resolve(
              'babel-preset-react-app/webpack-overrides',
            ),
            presets: ['@babel/env', '@babel/react'],
            plugins: [
              [
                require.resolve('babel-plugin-named-asset-import'),
                {
                  loaderMap: {
                    svg: {
                      ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
                    },
                  },
                },
              ],
            ],
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            cacheCompression: isEnvProduction,
            compact: isEnvProduction,
          },
          include: [
            resolve(__dirname, 'src'),
            resolve(__dirname, 'node_modules'),
          ],
          exclude: /node_modules\/core-js/,
        },
        {
          test: /\.eot(\?v=\d+.\d+.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                mimetype: 'application/font-woff',
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                mimetype: 'application/octet-stream',
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@components': resolve(__dirname, 'src/components'),
        '@config': resolve(__dirname, 'src/config'),
        '@configs': resolve(__dirname, 'config'),
        '@constants': resolve(__dirname, 'src/constants'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@redux': resolve(__dirname, 'src/redux'),
        '@util': resolve(__dirname, 'src/util'),
        '@containers': resolve(__dirname, 'src/containers'),
      },
    },
    plugins: [
      new webpack.DefinePlugin(envKeys), // necessary for passing env props to components
      new CopyWebpackPlugin([
        { from: './build', to: '' },
      ]),
      new Dotenv({
        path: process.env.NODE_ENV !== 'production' ? `.${process.env.NODE_ENV}.env` : '.production.env',
      }),
      new webpack.ProvidePlugin({
        Promise: 'es6-promise-promise',
      }),
    ],
  };
};

module.exports = (env) => {
  return config(env);
};
