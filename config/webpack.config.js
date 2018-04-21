import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import OfflinePlugin from 'offline-plugin';

const DEVELOPMENT_MODE = 'development';
const mode = process.env.NODE_ENV || DEVELOPMENT_MODE;
const inDevelopment = () => mode === DEVELOPMENT_MODE;

let HTML_PLUGIN_OPTIONS_EXTRA = {};

if (!inDevelopment()) {
  HTML_PLUGIN_OPTIONS_EXTRA = {
    minify: {
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      removeComments: true,
      preserveLineBreaks: false,
      removeRedundantAttributes: true,
      removeTagWhitespace: true,
      collapseWhitespace: true,
    },
  };
}

const plugins = [
  new OfflinePlugin({
    externals: ['/'],
    ServiceWorker: {
      minify: false,
      scope: '/',
    },
    AppCache: null,
  }),
  new CopyWebpackPlugin(
    [
      {
        from: path.resolve(__dirname, '../public/**/*'),
        to: path.resolve(__dirname, '../build'),
        ignore: ['*.html'],
        flatten: true,
      },
    ],
    {},
  ),
  new HtmlWebpackPlugin(Object.assign(
    {},
    {
      template: path.resolve(__dirname, '../public/index.html'),
      inject: true,
    },
    HTML_PLUGIN_OPTIONS_EXTRA,
  )),
];

let CSS_RULE = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
  ],
};

if (!inDevelopment()) {
  plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
  }));
  plugins.push(new WebpackMd5Hash());
  plugins.push(new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].css',
    sourcemap: true,
  }));

  CSS_RULE = {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
    ],
  };
}

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  mode,
  target: 'web',
  devtool: inDevelopment() ? 'inline-source-map' : 'source-map',
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
      CSS_RULE,
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins,
};
