import React, { PropTypes } from 'react';

import * as coreStyle from '../styles/components/button';
import * as themeStyle from '../styles/themes/oaxaca/components/button';

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
    style={{
      ...( coreStyle.regular || {}),
      ...( themeStyle.regular || {}),
      ...( isUpdating ? {
        ...( coreStyle.updating || {}),
        ...( themeStyle.updating || {}),
      } : {}),
    }}
    type={ type }
  >
    { isUpdating ? updatingText : text }
  </button>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
