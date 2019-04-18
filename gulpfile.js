var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});

gulp.task('watch', ['browserSync'], function() {
    // gulp.watch('./static/**/*.css', browserSync.reload);
    // gulp.watch('./static/**/*.js', browserSync.reload);
    gulp.watch('./*.html', browserSync.reload);
    // gulp.watch('index.html', browserSync.reload);
});

gulp.task('default', function(callback) {
    runSequence(['browserSync', 'watch'], callback);
});