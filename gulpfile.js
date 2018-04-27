'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/_sass/*.scss')
      .pipe(sass({
          outputStyle: 'compressed'
      }))
      .pipe(gulp.dest('./src/_includes/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/_sass/*.scss', ['sass']);
});
