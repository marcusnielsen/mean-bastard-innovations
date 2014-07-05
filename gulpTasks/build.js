var vinylSourceStream = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var browserify = require('browserify');

module.exports = function (gulp) {
    gulp.task('build', ['clean'], function () {
        return browserify('./public/app/app.js').bundle()
            .pipe(vinylSourceStream('bundle.js'))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest('./public/dist'));
    });
};