var baseConf = require('./karma.conf');
var assign = require('object-assign');

module.exports = function(config) {
  baseConf(config);

  config.set({
    basePath: '',

    singleRun: true,

    files: config.files.concat('src/js/main.js'),

    preprocessors: assign({
      'src/**/*.js': ['webpack', 'coverage']
    }, config.preprocessors),

    reporters: ['coverage'],

    webpack: assign(config.webpack, {
      module: assign(config.webpack.module, {
        postLoaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|vendor|test)/,
            loader: 'istanbul-instrumenter'
          }
        ]
      })
    })
  });
};
