var webpack = require('webpack');
var assign = require('object-assign');

module.exports = assign(require('./webpack.config'), {
  devServer: false,
  devtool: false,

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin()
  ]
});
