const NODE_ENV = process.env.NODE_ENV === 'production' ?
  'production': 'development';

const babel = require( 'babel-core/register' );
const gulp = require( 'gulp' );
const mocha = require( 'gulp-mocha' );
const webpack = require( 'webpack' );
const webpackBrowserConfig = require( `./webpack/${ NODE_ENV }/browser.config.js` );
const webpackServerConfig = require( `./webpack/${ NODE_ENV }/server.config.js` );

const onWebpackCompile = done => {
  return ( err, stats ) => {
    if ( err ) {
      console.log( 'Error', err );
    } else {
      console.log( stats.toString());
    }

    done();
  };
};

gulp.task( 'compileBrowserJs', done => {
  webpack( webpackBrowserConfig, onWebpackCompile( done ));
});

gulp.task( 'compileServerJs', done => {
  webpack( webpackServerConfig, onWebpackCompile( done ));
});

gulp.task( 'createStaticJs', [ 'compileBrowserJs' ], () => {
  return gulp.src([
    './dist/browser.js.map',
    `./dist/browser${ NODE_ENV === 'development' ? '' : '.min' }.js`,
    `./node_modules/react/dist/react${ NODE_ENV === 'development' ? '' : '.min' }.js`,
    `./node_modules/react/dist/react-dom${ NODE_ENV === 'development' ? '' : '.min' }.js`,
    `./node_modules/react-router/umd/ReactRouter${ NODE_ENV === 'development' ? '' : '.min' }.js`,
  ]).pipe( gulp.dest( './static/js/' ));
});

gulp.task( 'test', () => {
  return gulp.src( './test/**/*.js' )
    .pipe( mocha({
      compilers: {
        js: babel({
          stage: 1,
        }),
      },
    }));
});

gulp.task( 'build', [ 'compileBrowserJs', 'compileServerJs', 'createStaticJs' ]);
