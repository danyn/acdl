'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./_sass/*.scss')
      .pipe(sass({
          outputStyle: 'compressed'

      }))
      .pipe(gulp.dest('./_includes/css'));
});
 
gulp.task('sassPages', function () {
  return gulp.src('./pages/**/**/*.scss')
      .pipe(sass({
          outputStyle: 'compressed',
          includePaths: [
            './_sass'
        ]
      }))
      .pipe(gulp.dest('./_includes/css'));
});

gulp.task('sassComponents', function () {
  return gulp.src('./_includes/**/**/*.scss')
      .pipe(sass({
          outputStyle: 'compressed',
          includePaths: [
            './_sass'
        ]
      }))
      .pipe(gulp.dest('./_includes/css'));
});


gulp.task('watch', function(){
  gulp.watch('./_sass/*.scss', gulp.series('sass')); 
  gulp.watch('./pages/**/**/*.scss', gulp.series('sassPages')); 
  gulp.watch('./_includes/**/**/*.scss', gulp.series('sassComponents')); 
  
});

gulp.task('default', gulp.series('sass','sassPages' , 'sassComponents' , 'watch', function(){
  console.log("running tasks");
}));