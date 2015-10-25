import * as rootConfig from '../config';

const config = {
  html: {
    color: {
      background: rootConfig.color.background,
      font: rootConfig.color.font,
    },
    font: {
      family: rootConfig.font.family.regular,
      lineHeight: rootConfig.font.lineHeight,
      size: rootConfig.font.size.small,
    },
  },
};

const body = {
  margin: 0,
};

const html = {
  backgroundColor: config.html.color.background,
  color: config.html.color.font,
  fontFamily: config.html.font.family,
  fontSize: config.html.font.size,
  lineHeight: config.html.font.lineHeight,
};

const root = {};

export { body, html, root };
