import webpack from 'webpack';

import defaultConfig from '../default';
import proConfig from '../pro';
import serverConfig from '../server';

const baseConfig = {
  ...defaultConfig,
  ...serverConfig,
  ...proConfig,
};

const wpConfig = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: 'server.min.js',
  },
};

export default wpConfig;
