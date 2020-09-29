const util = require('gulp-util');

const production = util.env.production || util.env.prod || util.env._.indexOf('build') !== -1 || false;
const destPath = '../priv/static';

const config = {
    env       : 'development',
    production: production,

    src: {
        root         : 'src',
        sass         : 'src/sass',
    },
    dest: {
        root : destPath,
        css  : destPath + '/css',
    },

    setEnv: function(env) {
      if (typeof env !== 'string') return;
      this.env = env;
      this.production = env === 'production';
      process.env.NODE_ENV = env;
    },

    logEnv: function() {
        util.log(
          'Environment:',
          util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
        );
    },

    errorHandler: require('./util/handle-errors')
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
