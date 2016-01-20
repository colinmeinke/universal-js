import atImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import calcFunction from 'postcss-calc-function';
import colorFunction from 'postcss-color-function';
import customProps from 'postcss-custom-props';
import path from 'path';

import config from '../src/common/config';

export default {
  output: {
    path: path.resolve( __dirname, '..', config.dir.dist ),
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loaders: [ 'babel' ],
      test: /\.js$/,
    },
    {
      loaders: [ 'json' ],
      test: /\.json$/,
    }],
  },
  postcss: function () {
    return [
      atImport({
        onImport: function ( files ) {
          files.forEach( this.addDependency );
        }.bind( this )
      }),
      customProps(),
      calcFunction(),
      colorFunction(),
      autoprefixer({ browsers: [ 'last 2 versions' ]}),
    ];
  },
};
