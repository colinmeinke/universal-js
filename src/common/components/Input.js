import React, { Component, PropTypes } from 'react';

import * as coreStyle from '../styles/components/input';
import * as themeStyle from '../styles/themes/oaxaca/components/input';

let debounce;

const propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

class Input extends Component {
  onChange ( value ) {
    clearTimeout( debounce );
    debounce = setTimeout(() => {
      this.props.onChange( value );
    }, 500 );
  }

  render () {
    return (
      <input
        defaultValue={ this.props.value }
        name={ this.props.name }
        onChange={ e => this.onChange( e.target.value )}
        placeholder={ this.props.placeholder }
        style={{
          ...( coreStyle.regular || {}),
          ...( themeStyle.regular || {}),
        }}
      />
    );
  }
}

Input.propTypes = propTypes;

export default Input;
