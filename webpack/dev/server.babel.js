import webpack from 'webpack';

import defaultConfig from '../default';
import devConfig from '../dev';
import serverConfig from '../server';

const baseConfig = {
  ...defaultConfig,
  ...serverConfig,
  ...devConfig,
};

const wpConfig = {
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

export default wpConfig;
