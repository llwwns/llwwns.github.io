const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./base')

module.exports = webpackMerge(commonConfig, {
  entry: {
      index: './index.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
            screw_ie8: true,
            keep_fnames: true
        },
        compress: {
            screw_ie8: true
        },
        comments: false
    })

  ],
})
