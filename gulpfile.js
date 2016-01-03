const NODE_ENV = process.env.NODE_ENV === 'production' ?
  'production': 'development';

const babel = require( 'babel-core/register' );
const gulp = require( 'gulp' );
const mocha = require( 'gulp-mocha' );
const path = require( 'path' );
const rename = require( 'gulp-rename' );
const webpack = require( 'webpack' );
const webpackClientConfig = require( `./webpack/${ NODE_ENV }/client.config.js` );
const webpackServerConfig = require( `./webpack/${ NODE_ENV }/server.config.js` );

const config = require( './src/common/config' );

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

gulp.task( 'compileClientJs', done => {
  webpack( webpackClientConfig, onWebpackCompile( done ));
});

gulp.task( 'compileServerJs', done => {
  webpack( webpackServerConfig, onWebpackCompile( done ));
});

gulp.task( 'createStaticJs', [ 'compileClientJs' ], done => {
  gulp.src( path.join( __dirname, config.dir.dist, 'client.js.map' ))
    .pipe( gulp.dest( path.join( __dirname, config.dir.static, config.dir.js )));

  return config[ NODE_ENV ].scripts.forEach( script => {
    return gulp.src( `.${ script.file.source }` )
      .pipe( rename( script.file.name ))
      .pipe( gulp.dest( path.join( __dirname, config.dir.static, config.dir.js )))
  });
});

gulp.task( 'test', () => {
  return gulp.src( `./${ config.dir.test }/**/*.js` )
    .pipe( mocha({
      compilers: {
        js: babel({
          plugins: [ 'transform-object-rest-spread', 'transform-react-jsx' ],
          presets: [ 'es2015' ],
        }),
      },
    }));
});

gulp.task( 'build', [ 'compileClientJs', 'compileServerJs', 'createStaticJs' ]);
