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

baseConfig.module.loaders.push({
  loaders: [ 'style', 'css?modules&sourceMap&importLoaders=1!postcss' ],
  test: /\.css$/,
});

export default {
  ...baseConfig,
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3001/',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    baseConfig.entry,
  ],
  externals,
  output: {
    ...baseConfig.output,
    filename: 'client.js',
    publicPath: 'http://localhost:3001/'
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ],
};
