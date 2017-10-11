const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babili = require('gulp-babili');
const cleanCSS = require('gulp-clean-css');
const rimraf = require('rimraf');
const browserSync = require('browser-sync').create();

gulp.task('clean', (cb) =>
  rimraf('./dist', cb)
);

gulp.task('styles', () =>
  gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'))
);

gulp.task('scripts', () =>
  gulp.src([
    './node_modules/tippy.js/dist/tippy.min.js',
    './node_modules/vivus/dist/vivus.min.js',
    './node_modules/smooth-scroll/dist/js/smooth-scroll.min.js',
    './src/**/*.js',
  ])
    .pipe(concat('bundle.js'))
    .pipe(babili({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest('./dist/'))
);

gulp.task('html', () =>
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('./dist'))
);

gulp.task('default', ['clean'], () => {
  gulp.start('styles');
  gulp.start('scripts');
  gulp.start('html');
});

gulp.task('watch', ['default'], () => {
  browserSync.init({
    server: {
        baseDir: "./dist"
    }
  });
  gulp.watch('./src/**/*.scss', ['styles']).on('change', browserSync.stream);
  gulp.watch('./src/**/*.js', ['scripts']).on('change', browserSync.reload);
  gulp.watch('./src/**/*.html', ['html']).on('change', browserSync.reload);
});
