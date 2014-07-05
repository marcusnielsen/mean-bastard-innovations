var rimraf = require('gulp-rimraf');

module.exports = function (gulp) {
    gulp.task('clean', function () {
        return gulp.src('./public/dist/**/*', {read: false})
            .pipe(rimraf());
    });
};