var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: true,
  devServer: {
    colors: true,
    progress: true
  },
  devtool: '#cheap-module-eval-source-map',
  context: __dirname + '/src',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8100',
      'webpack/hot/only-dev-server',
      './js/main.js'
    ],

    // include general shim modules here
    shims: [
      // required for some ES6 features to work, e.g. Object.assign
      'babel-core/polyfill'
    ],

    // include shim modules for <=IE9 here
    ie9shims: []
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    root: [
      // resolve also these as roots to avoid importing modules
      // with insane ../../../../ prefixes
      path.join(__dirname, './src/js'),
      path.join(__dirname, './src'),
      path.join(__dirname, './')
    ]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /vendor/],
        loader: 'eslint'
      }
    ],
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel?comments=false'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(sass|scss)$/, loader: 'style!css!sass'},
      { test: /\.less$/, loader: 'style!css!less'},
      { test: /\.styl$/, loader: 'style!css!stylus'},
      { test: /\.(eot|otf|woff2?|ttf|svg|png|jpg|jpeg|gif)[\?]?.*$/, loader: 'file-loader' }
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
