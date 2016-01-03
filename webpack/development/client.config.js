'use strict';

const path = require( 'path' );
const webpack = require( 'webpack' );

const config = require( '../../src/common/config' );

const babelConfig = {
  plugins: [ 'transform-object-rest-spread' ],
  presets: [ 'es2015', 'react', 'react-hmre' ],
};

const externals = config.development.scripts.filter( script => {
  return script.import;
}).map( script => {
  return {[ script.import ]: script.identifier };
}).reduce(( prev, curr ) => {
  return Object.assign( prev, curr );
});

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client',
  ],
  externals: externals,
  output: {
    path: path.resolve( __dirname, '..', '..', config.dir.dist ),
    filename: 'client.js',
    publicPath: '/public/',
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
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
