'use strict';

var fs = require( 'fs' );
var path = require( 'path' );
var webpack = require( 'webpack' );

var babelConfig = {
  "stage": 1,
};

var nodeModules = {};

fs.readdirSync( 'node_modules' )
  .filter( function ( x ) {
    return [ '.bin' ].indexOf( x ) === -1;
  })
  .forEach( function ( mod ) {
    nodeModules[ mod ] = 'commonjs ' + mod;
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
      loaders: [ 'babel?' + JSON.stringify( babelConfig )],
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
    new webpack.BannerPlugin(
      'require( \'source-map-support\' ).install();',
      {
        entryOnly: false,
        raw: true,
      }
    ),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
    }),
  ],
  'target': 'node',
};
