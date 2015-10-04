import Color from 'color';

import * as rootConfig from '../../common/style/config';

const config = {
  regular: {
    color: {
      background: rootConfig.color.block.background,
      font: rootConfig.color.block.font,
    },
    padding: {
      y: rootConfig.spacing.small,
      x: rootConfig.spacing.medium,
    },
  },
  updating: {
    color: {
      background: Color( rootConfig.color.block.background )
        .lighten( 0.75 )
        .hexString(),
    },
  },
};

const regular = {
  backgroundColor: config.regular.color.background,
  border: 'none',
  color: config.regular.color.font,
  fontSize: 'inherit',
  lineHeight: 'inherit',
  padding: `${ config.regular.padding.y }px ${ config.regular.padding.x }px`,
};

const updating = {
  backgroundColor: config.updating.color.background,
};

export { regular, updating };
