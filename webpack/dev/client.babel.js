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

loaders.push({
  loaders: [ 'style', 'css?modules&sourceMap&importLoaders=1!postcss' ],
  test: /\.css$/,
});

export default {
  ...baseConfig,
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    baseConfig.entry,
  ],
  externals,
  module: {
    loaders: loaders,
  },
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
};
