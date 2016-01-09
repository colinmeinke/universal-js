import webpack from 'webpack';

import config from '../../src/common/config';

import clientConfig from '../client';
import defaultConfig from '../default';
import devConfig from '../dev';

const externals = config.development.scripts
  .filter( script => script.import )
  .map( script => ({[ script.import ]: script.identifier }))
  .reduce(( prev, curr ) => ({ ...prev, ...curr }));

const baseConfig = {
  ...defaultConfig,
  ...clientConfig,
  ...devConfig,
};

const wpConfig = {
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
};

wpConfig.module.loaders[ 0 ].loaders = [ 'babel?presets[]=react-hmre' ];

export default wpConfig;
