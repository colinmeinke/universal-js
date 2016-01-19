import React, { PropTypes } from 'react';

import baseStyles from './base.css';
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

const Button = ({ isUpdating, text, type, updatingText }) => (
  <button
    className={[
      baseStyles.regular,
      themeStyles.regular,
      ...( isUpdating ? [
        baseStyles.updating,
        themeStyles.updating,
      ] : []),
    ].join( ' ' )}
    type={ type }
  >
    { isUpdating ? updatingText : text }
  </button>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
