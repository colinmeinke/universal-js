import * as rootConfig from '../config';

const config = {
  form: {
    padding: {
      x: rootConfig.spacing.small,
    },
    margin: {
      y: rootConfig.spacing.large,
    },
  },
};

const form = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: config.form.margin.y,
  marginTop: config.form.margin.y,
  paddingLeft: `${ config.form.padding.x }px`,
  paddingRight: `${ config.form.padding.x }px`,
};

export { form };
