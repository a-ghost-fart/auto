module.exports = function (config) {
    'use strict';
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
        files: [
          './test/**/*.spec.js'
        ],
        exclude: [
          '**/*.swp'
        ],
        reporters: ['progress'],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};
