/*jshint globalstrict: true*/
/*global require*/
'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');

gulp.task('default', ['js', 'css', 'watch']);

gulp.task('js', function () {
    gulp.src('./web/*.js')
        .pipe(livereload());
});

gulp.task('css', function () {
    gulp.src('./web/styles.css')
        .pipe(livereload());
});

gulp.task('frontend-html', function () {
    gulp.src('./web/*.html')
        .pipe(livereload());
});

gulp.task('watch', function () {
    gulp.watch('web/*.html', ['frontend-html']);
    gulp.watch('web/*.js', ['js']);
    gulp.watch('web/styles.css', ['css']);
});
