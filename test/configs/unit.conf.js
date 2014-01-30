module.exports = function (config) {
    return config.set({
        basePath: '../..',
        frameworks: ['jasmine'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'dist/angular-encode-uri.js',
            'test/*.js'
        ],
        port: 9877
    });
};
