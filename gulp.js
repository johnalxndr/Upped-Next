var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// or...

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});
