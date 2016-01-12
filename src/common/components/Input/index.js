import classNames from 'classnames';
import React, { PropTypes } from 'react';

import coreStyles from './core';
import themeStyles from './oaxaca-theme';

const classes = classNames( coreStyles.regular, themeStyles.regular );

let debounce;

const propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

const Input = ({ name, onChange, placeholder, value }) => (
  <input
    className={ classes }
    defaultValue={ value }
    name={ name }
    onChange={ e => {
      clearTimeout( debounce );
      debounce = setTimeout(() => {
        onChange( e.target.value );
      }, 500 );
    }}
    placeholder={ placeholder }
  />
);

Input.propTypes = propTypes;

export default Input;
