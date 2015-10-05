const fs = require( 'fs' );
const path = require( 'path' );
const webpack = require( 'webpack' );

const babelConfig = {
  "stage": 1,
};

var nodeModules = {};

fs.readdirSync( 'node_modules' )
  .filter( function ( file ) {
    return [ '.bin' ].indexOf( file ) === -1;
  })
  .forEach( function ( module ) {
    nodeModules[ module ] = `commonjs ${ module }`;
  });

module.exports = {
  entry: './src/server',
  externals: nodeModules,
  output: {
    path: path.resolve( __dirname, '..', '..', 'dist' ),
    filename: 'server.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loaders: [ `babel?${ JSON.stringify( babelConfig )}` ],
      test: /\.js$/,
    },
    {
      loaders: [ 'json' ],
      test: /\.json$/,
    }],
  },
  node: {
    __dirname: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false,
      },
    }),
  ],
  'target': 'node',
};
