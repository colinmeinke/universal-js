import webpack from 'webpack';

import devConfig from '../dev';
import serverConfig from '../server';

const baseConfig = {
  ...serverConfig,
  ...devConfig,
};

export default {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: 'server.js',
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.BannerPlugin(
      'require( \'source-map-support\' ).install();',
      {
        entryOnly: false,
        raw: true,
      }
    ),
  ],
};
