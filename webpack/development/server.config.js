'use strict';

const fs = require( 'fs' );
const path = require( 'path' );
const webpack = require( 'webpack' );

const config = require( '../../src/common/config' );

const babelConfig = {
  plugins: [ 'transform-object-rest-spread' ],
  presets: [ 'es2015', 'react' ],
};

let nodeModules = {};

fs.readdirSync( 'node_modules' )
  .filter( file => {
    return !file.includes( '.bin' );
  })
  .concat( config.subDirectoryNodeModules )
  .forEach( module => {
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
  target: 'node',
};
