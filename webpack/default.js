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
};
