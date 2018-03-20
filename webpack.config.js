const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ZopfliPlugin = require("zopfli-webpack-plugin");

module.exports = {
  entry: './js/app.js',
  mode: 'production',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /(fonts|images)/,
      loaders: ['url-loader']
    }]
  },
  plugins: [new UglifyJsPlugin({
    test: /\.js($|\?)/i
  }), new ZopfliPlugin({
    asset: "[path].gz[query]",
    algorithm: "zopfli",
    test: /\.(js|html)$/,
    threshold: 10240,
    minRatio: 0.8
  })]
};