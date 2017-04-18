const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',

    context: resolve('src'),

    entry: {
      vendor: [
        "codemirror",
        "glamor",
        "lodash",
        "material-ui",
        "mermaid",
        "qrcode.react",
        "react",
        "react-bootstrap",
        "react-codemirror",
        "react-dom",
        "react-hot-loader",
        "react-router",
        "react-router-dom",
        "react-tap-event-plugin",
        "semantic-ui-css",
        "semantic-ui-react"
      ]
    },
    output: {
        filename: 'bundle.js',

        path: resolve('public'),

        publicPath: '/'
    },

    devtool: 'inline-source-map',

    devServer: {
        hot: true,

        contentBase: resolve('public'),

        publicPath: '/'
    },

    resolve: {
        extensions: ['.js'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ]
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader', ],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader',],
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }],
    },

    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.CommonsChunkPlugin({ // Split common modules
        name: 'vendor',
        filename: 'commons.js',
        minChunks: function (module) {
          return module.context && module.context.indexOf('node_modules') !== -1
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({ // Split manifest
        name: 'manifest',
        filename: 'manifest.js'
      })
    ],
};
