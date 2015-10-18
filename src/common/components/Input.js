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

const Input = props => (
  <input
    defaultValue={ props.value }
    name={ props.name }
    onChange={ e => {
      clearTimeout( debounce );
      debounce = setTimeout(() => {
        props.onChange( e.target.value );
      }, 500 );
    }}
    placeholder={ props.placeholder }
    style={{
      ...( coreStyle.regular || {}),
      ...( themeStyle.regular || {}),
    }}
  />
);

Input.propTypes = propTypes;

export default Input;
