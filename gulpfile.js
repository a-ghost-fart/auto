var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');


// Copy html to dist directory
gulp.task('html', function () {
    'use strict';
    return gulp.src('./src/html/**/*.html')
        .pipe(gulp.dest('./dist/'));
});

// Copy assets
gulp.task('assets', function () {
    'use strict';
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/assets/'));
});


// Browserify js
gulp.task('js', function () {
    'use strict';
    var browserified = transform(function (filename) {
        var b = browserify({ entries: filename, debug: true });
        return b.bundle();
    });
    return gulp.src('./src/js/app.js')
        .pipe(browserified)
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'));
});


// Build and copy less
gulp.task('less', function () {
    'use strict';
    return gulp.src('./src/less/**/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});


// Basic build task
gulp.task('build', ['less', 'js', 'html', 'assets']);


// Default watch task
gulp.task('default', function () {
    'use strict';
    return gulp.watch('./src/**/*', ['build']);
});
