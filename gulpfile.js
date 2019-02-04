const {src, dest, series, parallel} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const  autoprefixer = require('autoprefixer');
const del = require('del');
const fs = require("fs");

const dist = 'dist/upload/';

function clean() {
  return del([
    'dist/upload',
  ]);
}

const ignoreFolders = [
  '!src/app/checkout/**',
  '!src/app/static-page/**',
  '!src/app/language/**',
  '!src/app/loader/**',
];

function html() {
  createDist();
  fs.closeSync(fs.openSync(`${dist}app.component.html`, 'w'));
  return src(['src/app/**/*.html', '!src/app/app.component.html', ...ignoreFolders])
    .pipe(htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true,
      removeComments: true,
      caseSensitive: true,
    }))
    .pipe(dest(dist));
}

function scss() {
  createDist();
  const scssOptions = sass({outputStyle: 'compressed'}).on('error', sass.logError);
  return src(['src/app/**/*.scss', '!src/app/app.component.scss', ...ignoreFolders])
    .pipe(scssOptions)
    .pipe(postcss([autoprefixer({browsers: ['last 10 versions']})]))
    .pipe(dest(dist));
}

function styles() {
  createDist();
  const scssOptions = sass({outputStyle: 'compressed'}).on('error', sass.logError);
  return src('src/styles.scss')
    .pipe(scssOptions)
    .pipe(postcss([autoprefixer({browsers: ['last 10 versions']})]))
    .pipe(dest(dist));
}

function createDist() {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }
}

const scssTask = parallel(styles, scss);

exports.onlyHtml = series(clean, html);
exports.onlyScss = series(clean, scssTask);

exports.default = series(
  clean,
  parallel(
    html,
    scssTask
  )
);
