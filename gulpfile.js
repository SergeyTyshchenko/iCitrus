var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        port: 3000,
        livereload: true,
        root: ''
    })
});

gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(connect.reload())
});

gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(connect.reload())
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload())
});

gulp.task('watch', function () {
   gulp.watch('./css/*.css', ['css']);
   gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['connect', 'watch']);