import React, { PropTypes } from 'react';

import * as coreStyle from '../styles/components/input';
import * as themeStyle from '../styles/themes/oaxaca/components/input';

let debounce;

const propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

const Input = ({ name, onChange, placeholder, value }) => (
  <input
    defaultValue={ value }
    name={ name }
    onChange={ e => {
      clearTimeout( debounce );
      debounce = setTimeout(() => {
        onChange( e.target.value );
      }, 500 );
    }}
    placeholder={ placeholder }
    style={{
      ...( coreStyle.regular || {}),
      ...( themeStyle.regular || {}),
    }}
  />
);

Input.propTypes = propTypes;

export default Input;
