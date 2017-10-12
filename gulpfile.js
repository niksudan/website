const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babili = require('gulp-babili');
const cleanCSS = require('gulp-clean-css');
const rimraf = require('rimraf');
const browserSync = require('browser-sync').create();
const ejs = require('gulp-ejs');
const marked = require('marked');
const fs = require('fs');
const Entities = require('html-entities').AllHtmlEntities;
const ejsRenderer = require('ejs');

const entities = new Entities();

gulp.task('clean', (cb) =>
  rimraf('./dist', cb)
);

gulp.task('styles', () =>
  gulp.src('./src/scss/*.scss')
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

gulp.task('views', () => {
  const stuff = ejsRenderer.render(
    entities.decode(
      marked(
        fs.readFileSync('./src/content/stuff.md', { encoding: 'UTF8' })
      )
    ),
    {},
    { root: __dirname + '/src/views' }
  );
  console.log(stuff);
  gulp.src('src/views/*.ejs')
    .pipe(ejs({
      title: 'Nik\'s Space',
      stuff,
    }, {}, { ext: '.html' }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['clean'], () => {
  gulp.start('styles');
  gulp.start('scripts');
  gulp.start('views');
});

gulp.task('watch', ['default'], () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch('./src/scss/*.scss', ['styles']).on('change', browserSync.stream);
  gulp.watch('./src/**/*.js', ['scripts']).on('change', browserSync.reload);
  gulp.watch('./src/**/*.ejs', ['views']).on('change', browserSync.reload);
  gulp.watch('./src/**/*.md', ['views']).on('change', browserSync.reload);
});
