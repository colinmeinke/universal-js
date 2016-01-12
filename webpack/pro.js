import webpack from 'webpack';

import defaultConfig from './default';

export default {
  ...defaultConfig,
  plugins: [
    ...defaultConfig.plugins,
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
};
