import React, { PropTypes } from 'react';

import coreStyles from './core.css';
import themeStyles from './oaxaca-theme.css';

const propTypes = {
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

const Input = ({ defaultValue, name, onChange, placeholder }) => {
  let debounce;

  const onChangeWithDebounce = e => {
    clearTimeout( debounce );
    debounce = setTimeout(() => {
      onChange( e.target.value );
    }, 500 );
  };

  return (
    <input
      className={[
        coreStyles.regular,
        themeStyles.regular,
      ].join( ' ' )}
      defaultValue={ defaultValue }
      name={ name }
      onChange={ onChangeWithDebounce }
      placeholder={ placeholder }
    />
  );
};

Input.propTypes = propTypes;

export default Input;
