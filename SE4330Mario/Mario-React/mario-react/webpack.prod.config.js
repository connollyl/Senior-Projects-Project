const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { resolve } = require('path');

const common = require('./webpack.common.config');

const analyze = process.env.ANALYZE;

const config = (envObj) => {
  // Need empty env object to avoid plugins throwing an error
  // Seems like a binding issue and env is being set to undefined
  // Plugins don't need the env to be set to anything, just can't
  // be undefined
  // related: https://github.com/webpack/webpack/issues/2458
  const env = envObj || {};
  return {
    bail: true,
    mode: 'production',
    devtool: 'none',
    entry: [
      require.resolve('./polyfills'),
      './src/index.js',
    ],
    module: {
      ...common(env).module || {},
    },
    output: {
      ...common(env).output,
      // chunkFilename: '[name].bundle.js',
      filename: 'index.js', // `static/[name].${buildHash}.js`,
      chunkFilename: 'static/[name].[hash:8].chunk.js',
      path: resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    optimization: {
      ...common(env).optimization || {},
      splitChunks: {
        chunks: 'all',
        minSize: 300000,
        maxSize: 600000,
      },
    },
    performance: {
      maxAssetSize: 1000000,
      maxEntrypointSize: 1000000,
      hints: 'warning',
    },

    plugins: [
      new CleanWebpackPlugin(),
      ...common(env).plugins || [],
      new HtmlWebpackPlugin({
        inject: true,
        template: resolve(__dirname, 'build/index.html'),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
    ],
  };
};

const getAnalyzerPlugin = () => {
  return new BundleAnalyzerPlugin({
    generateStatsFile: true,
    analyzerMode: 'static',
    defaultSizes: 'gzip',
    statsOptions: {
      entrypoints: true,
      modules: true,
      performance: true,
      children: true,
      chunks: true,
      chunkGroups: true,
      chunkModules: true,
      chunkOrigins: true,
      depth: true,
      env: true,
      reasons: true,
      usedExports: true,
      providedExports: true,
      optimizationBailout: true,
      errorDetails: true,
      publicPath: true,
      exclude: false,
      maxModules: 'Infinity',
    },
  });
};

module.exports = (env) => {
  const conf = config(env);
  if (analyze) {
    conf.plugins.push(getAnalyzerPlugin());
  }
  return {
    ...common(env),
    ...conf,
  };
};
