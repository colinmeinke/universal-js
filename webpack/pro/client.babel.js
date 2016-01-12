import webpack from 'webpack';

import config from '../../src/common/config';

import clientConfig from '../client';
import proConfig from '../pro';

const baseConfig = {
  ...clientConfig,
  ...proConfig,
};

const externals = config.production.scripts
  .filter( script => script.import )
  .map( script => ({[ script.import ]: script.identifier }))
  .reduce(( prev, curr ) => ({ ...prev, ...curr }));

export default {
  ...baseConfig,
  externals,
  output: {
    ...baseConfig.output,
    filename: 'client.min.js',
  },
};
