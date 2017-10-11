const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => 
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
);

gulp.task('watch', () => 
  gulp.watch('./scss/**/*.scss', ['styles'])
);

gulp.task('default', ['styles']);
