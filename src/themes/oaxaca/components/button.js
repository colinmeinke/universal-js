import merge from 'deepmerge';

import * as coreConfig from '../../../common/style/config';
import * as themeConfig from '../common/config';

const rootConfig = merge( coreConfig, themeConfig );

const config = {
  regular: {
    color: {
      background: rootConfig.color.block.background,
    },
  },
};

const regular = {
  backgroundColor: config.regular.color.background,
};

export { regular };
