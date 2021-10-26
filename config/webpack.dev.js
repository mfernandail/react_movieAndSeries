/**@type {import('webpack').Configuration}*/
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    static: "../dist",
    open: true,
    // hot: true
  },
  devtool: "eval-source-map",
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader"],
        test: /\.(css|scss)$/
      }
    ]
  }
}

module.exports = merge(common, devConfig);