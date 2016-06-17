var webpackConfig = require('./webpack.config');
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        reporters: ['progress'],
        port: 9876,
        colors: false,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        autoWatchBatchDelay: 300,

        files: ['./tests/**/*.ts'],

        preprocessors: {
            './tests/**/*.spec.ts': ['webpack']
        },

        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },

        webpackMiddleware: {
            noInfo: true
        }

    });
}