const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const config = require('../config');

const isMax = mq => /max-width/.test(mq);
const isMin = mq => /min-width/.test(mq);

const sortMediaQueries = (a, b) => {
    const A = a.replace(/\D/g, '');
    const B = b.replace(/\D/g, '');

    if (isMax(a) && isMax(b)) {
        return B - A;
    } else if (isMin(a) && isMin(b)) {
        return A - B;
    } else if (isMax(a) && isMin(b)) {
        return 1;
    } else if (isMin(a) && isMax(b)) {
        return -1;
    }
    return 1;
}

const processors = [
  autoprefixer({
    overrideBrowserslist: ['last 4 versions'],
    cascade: false
  }),
  require('lost'),
  mqpacker({
    sort: sortMediaQueries
  })
];

gulp.task('sass', () => gulp
  .src(config.src.sass + '/*.{sass,scss}')
  // .pipe(sourcemaps.init())
  .pipe(sass({
      outputStyle: 'expanded', // nested, expanded, compact, compressed
      precision: 5
  }))
  .on('error', config.errorHandler)
  .pipe(postcss(processors))
  // .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.dest.css))
);

const build = gulp => gulp.parallel('sass');
const watch = gulp => () => gulp.watch(config.src.sass + '/**/*.{sass,scss}', gulp.parallel('sass'));

module.exports.build = build;
module.exports.watch = watch;
