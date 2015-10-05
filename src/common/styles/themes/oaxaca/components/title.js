import merge from 'deepmerge';

import * as coreConfig from '../../../config';
import * as themeConfig from '../config';

const rootConfig = merge( coreConfig, themeConfig );

const config = {
  border: {
    color: rootConfig.color.font,
    width: rootConfig.width.border,
  },
  pseudo: {
    size: rootConfig.width.border + rootConfig.spacing.small / 2,
  },
};

const borderStyle = {
  borderColor: config.border.color,
  borderWidth: `${ config.border.width }px`,
};

const pseudo = {
  ...borderStyle,
  bottom: `-${ config.border.width }px`,
  height: `${ config.pseudo.size }px`,
  width: `${ config.pseudo.size }px`,
};

const after = {
  ...pseudo,
  right: `-${ config.pseudo.size }`,
};

const before = {
  ...pseudo,
  left: `-${ config.pseudo.size }px`,
};

const title = {
  ...borderStyle,
};

export { after, before, title };
