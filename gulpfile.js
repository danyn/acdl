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
 
gulp.task('watch', function(){
  gulp.watch('./_sass/*.scss', gulp.series('sass')); 
  
});

gulp.task('default', gulp.series('sass', 'watch', function(){
  console.log("running tasks");
}));