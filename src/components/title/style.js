import * as rootConfig from '../../common/style/config';

const config = {
  border: {
    color: rootConfig.color.font,
    width: rootConfig.width.border,
  },
  container: {
    margin: {
      top: rootConfig.spacing.large,
    },
    padding: {
      x: rootConfig.spacing.small,
    },
  },
  font: {
    size: rootConfig.font.size.large,
  },
  pseudo: {
    size: rootConfig.width.border + rootConfig.spacing.small / 2,
  },
};

const pseudo = {
  borderBottom: `${ config.border.width }px solid ${ config.border.color }`,
  bottom: `-${ config.border.width }px`,
  boxSizing: 'border-box',
  display: 'block',
  height: `${ config.pseudo.size }px`,
  position: 'absolute',
  width: `${ config.pseudo.size }px`,
}

const after = {
  ...pseudo,
  borderRight: `${ config.border.width }px solid ${ config.border.color }`,
  right: `-${ config.pseudo.size }`,
};

const before = {
  ...pseudo,
  borderLeft: `${ config.border.width }px solid ${ config.border.color }`,
  left: `-${ config.pseudo.size }px`,
};

const container = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: `${ config.container.margin.top }px`,
  paddingLeft: `${ config.pseudo.size + config.container.padding.x }px`,
  paddingRight: `${ config.pseudo.size + config.container.padding.x }px`,
};

const link = {
  color: 'inherit',
  textDecoration: 'none',
};

const title = {
  borderBottom: `${ config.border.width }px solid ${ config.border.color }`,
  fontSize: `${ config.font.size }px`,
  margin: 0,
  position: 'relative',
};

export { after, before, container, link, title };
