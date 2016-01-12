import webpack from 'webpack';

import proConfig from '../pro';
import serverConfig from '../server';

const baseConfig = {
  ...serverConfig,
  ...proConfig,
};

export default {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: 'server.min.js',
  },
};
