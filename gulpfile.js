const gulp = require('gulp');
const config = require('./gulp/config');

const getTaskBuild = task => require('./gulp/tasks/' + task).build(gulp);
const getTaskWatch = task => require('./gulp/tasks/' + task).watch(gulp);

gulp.task('sass', () => getTaskBuild('sass'));

gulp.task('sass:watch', getTaskWatch('sass'));

const setmodeProd = done => {
  config.setEnv('production');
  config.logEnv();
  done();
}

const setmodeDev = done => {
  config.setEnv('development');
  config.logEnv();
  done();
}

gulp.task(
  'build',
  gulp.series(
    setmodeProd,
    'sass',
  )
);

gulp.task(
  'build:dev',
  gulp.series(
    setmodeDev,
    'sass',
  )
);

gulp.task(
  'watch',
  gulp.parallel(
    'sass:watch'
  )
);

gulp.task('default', gulp.series(['build:dev', 'watch']));
