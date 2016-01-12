import classNames from 'classnames';
import React, { PropTypes } from 'react';

import coreStyles from './core.css';
import themeStyles from './oaxaca-theme.css';

const defaultProps = {
  type: 'button',
};

const propTypes = {
  isUpdating: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  updatingText: PropTypes.string.isRequired,
};

const Button = ({ isUpdating, text, type, updatingText }) => {
  const classes = classNames( coreStyles.regular, themeStyles.regular, {
    [ coreStyles.updating ]: isUpdating,
    [ themeStyles.updating ]: isUpdating,
  });

  return (
    <button
      className={ classes }
      type={ type }
    >
      { isUpdating ? updatingText : text }
    </button>
  );
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
