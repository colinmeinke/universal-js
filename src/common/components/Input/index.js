import classNames from 'classnames';
import React, { PropTypes } from 'react';

import coreStyles from './core.css';
import themeStyles from './oaxaca-theme.css';

const classes = classNames( coreStyles.regular, themeStyles.regular );

let debounce;

const propTypes = {
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

const Input = ({ defaultValue, name, onChange, placeholder }) => (
  <input
    className={ classes }
    defaultValue={ defaultValue }
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
