var gulp = require('gulp');

var vinylSourceStream = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var rimraf = require('gulp-rimraf');
var browserify = require('browserify');
var watchify = require('watchify');
var jshint = require('gulp-jshint');

gulp.task('clean', function () {
    return gulp.src('./public/dist/**/*', {read: false})
        .pipe(rimraf());
});

gulp.task('lint', function () {
    return gulp.src('./public/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function () {
    var bundler = watchify('./public/app/app.js');

    var rebundle = function () {
        return bundler.bundle()
            .pipe(vinylSourceStream('bundle.js'))
            // TODO: Activate .pipe(streamify(uglify()))
            .pipe(gulp.dest('./public/dist'));
    };

    bundler.on('update', rebundle);

    return rebundle();
});

gulp.task('default', ['clean', 'watch']);