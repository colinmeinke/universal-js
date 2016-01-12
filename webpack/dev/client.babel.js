import webpack from 'webpack';

import config from '../../src/common/config';

import clientConfig from '../client';
import devConfig from '../dev';

const baseConfig = {
  ...clientConfig,
  ...devConfig,
};

const externals = config.development.scripts
  .filter( script => script.import )
  .map( script => ({[ script.import ]: script.identifier }))
  .reduce(( prev, curr ) => ({ ...prev, ...curr }));

const loaders = baseConfig.module.loaders.map( l => {
  if ( l.loaders && l.loaders[ 0 ] === 'babel' ) {
    return {
      ...l,
      loaders: [ 'babel?presets[]=react-hmre' ],
    };
  }

  return l;
});

export default {
  ...baseConfig,
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    baseConfig.entry,
  ],
  externals,
  output: {
    ...baseConfig.output,
    filename: 'client.js',
    publicPath: '/public/',
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: loaders,
  },
};
