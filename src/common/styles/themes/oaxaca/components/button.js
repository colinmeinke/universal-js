import Color from 'color';
import merge from 'deepmerge';

import * as coreConfig from '../../../config';
import * as themeConfig from '../config';

const rootConfig = merge( coreConfig, themeConfig );

const config = {
  regular: {
    color: {
      background: rootConfig.color.block.background,
    },
  },
  updating: {
    color: {
      background: rootConfig.color.block.background,
      font: Color( rootConfig.color.block.background )
        .darken( 0.5 )
        .hexString(),
    },
  },
};

const regular = {
  backgroundColor: config.regular.color.background,
};

const updating = {
  backgroundColor: config.updating.color.background,
  color: config.updating.color.font,
};

export { regular, updating };
