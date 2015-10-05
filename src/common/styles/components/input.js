import * as rootConfig from '../config';

const config = {
  regular: {
    border: {
      color: rootConfig.color.border,
      width: rootConfig.width.border,
    },
    height: rootConfig.font.size.small * rootConfig.font.lineHeight +
      rootConfig.spacing.small * 2,
    padding: {
      x: rootConfig.spacing.small,
    },
  },
};

const regular = {
  border: `${ config.regular.border.width }px
    solid ${ config.regular.border.color }`,
  boxSizing: 'border-box',
  color: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  height: `${ config.regular.height }px`,
  paddingLeft: `${ config.regular.padding.x }px`,
  paddingRight: `${ config.regular.padding.x }px`,
};

export { regular };
