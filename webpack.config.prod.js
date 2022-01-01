const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Webpack Production Configuration
 */
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: `${path.resolve(__dirname, './src')}/index.tsx`,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js?v=[contenthash]',
    publicPath: '/',
    assetModuleFilename: 'assets/[name].[hash:8].[ext]',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/assets/favicon.ico',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: 'tslint-loader',
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(pdf|ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
