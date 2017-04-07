var ExtractTextPlugin = require('extract-text-webpack-plugin');

const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',

    context: resolve(__dirname, 'src'),

    entry: {
      vendor: [
        "glamor",
        "glamorous",
        "material-ui",
        "qrcode.react",
        "react",
        "react-bootstrap",
        "react-dom",
        "react-hot-loader",
        "react-router",
        "react-router-dom",
        "react-tap-event-plugin",
        "semantic-ui-react",
        "lodash"
      ],
      index: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.js'
      ]
    },
    output: {
        filename: 'bundle.js',

        path: resolve(__dirname, 'public'),

        publicPath: '/'
    },

    devtool: 'inline-source-map',

    devServer: {
        hot: true,

        contentBase: resolve(__dirname, 'public'),

        publicPath: '/'
    },

    resolve: {
        extensions: ['.js'],
        modules: [
            resolve('./src'),
            resolve('./node_modules')
        ]
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader', ],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader',],//?modules&importLoaders=1', 'postcss-loader', ],
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
/*        }, {
            test: /fs/,
            loader: 'null-loader'*/
        }],
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
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
