import webpack from 'webpack';

import config from '../../src/common/config';

import clientConfig from '../client';
import defaultConfig from '../default';
import proConfig from '../pro';

const externals = config.production.scripts
  .filter( script => script.import )
  .map( script => ({[ script.import ]: script.identifier }))
  .reduce(( prev, curr ) => ({ ...prev, ...curr }));

const baseConfig = {
  ...defaultConfig,
  ...clientConfig,
  ...proConfig,
};

const wpConfig = {
  ...baseConfig,
  externals,
  output: {
    ...baseConfig.output,
    filename: 'client.min.js',
  },
};

export default wpConfig;
