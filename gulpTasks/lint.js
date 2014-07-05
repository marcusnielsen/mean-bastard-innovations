var jshint = require('gulp-jshint');

module.exports = function (gulp) {
    gulp.task('lint', function () {
        return gulp.src('./public/app/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
};


