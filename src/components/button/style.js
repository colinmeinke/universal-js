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
};

const regular = {
  backgroundColor: config.regular.color.background,
  border: 'none',
  color: config.regular.color.font,
  fontSize: 'inherit',
  lineHeight: 'inherit',
  padding: `${ config.regular.padding.y }px ${ config.regular.padding.x }px`,
};

export { regular };
