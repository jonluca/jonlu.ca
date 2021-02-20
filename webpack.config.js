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
    rules: [ {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /(fonts|images)/,
      use: ['url-loader']
    }]
  },
  plugins: [ new CompressionPlugin({
    compressionOptions: {
      numiterations: 15
    },
    algorithm(input, compressionOptions, callback) {
      return zopfli.gzip(input, compressionOptions, callback);
    }
  })]
};