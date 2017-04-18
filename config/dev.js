const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./base')

module.exports = webpackMerge(commonConfig, {
  entry: {
      index: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.js'
      ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
})
