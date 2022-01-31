var gulp = require('gulp');
var sugarss = require('sugarss');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');

gulp.task('style', function () {
    return gulp.src('./files/*.sss')
        .pipe(postcss([], { parser: sugarss }))
        .pipe(rename({ extname: '.scss' }))
        .pipe(gulp.dest('build'));
});


