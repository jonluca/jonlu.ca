const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');

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
  }), new CompressionPlugin({
    compressionOptions: {
      numiterations: 15
    },
    algorithm(input, compressionOptions, callback) {
      return zopfli.gzip(input, compressionOptions, callback);
    }
  })]
};