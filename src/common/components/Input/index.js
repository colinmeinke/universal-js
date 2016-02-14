import React, { Component, PropTypes } from 'react';

import baseStyles from './base.css';
import themeStyles from './oaxaca-theme.css';

let debounce;

const propTypes = {
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

class Input extends Component {
  onChangeWithDebounce ( e ) {
    const { value } = e.target;
    clearTimeout( debounce );
    debounce = setTimeout(() => {
      this.props.onChange( value );
    }, 500 );
  }

  render () {
    return (
      <input
        className={[
          baseStyles.regular,
          themeStyles.regular,
        ].join( ' ' )}
        defaultValue={ this.props.defaultValue }
        name={ this.props.name }
        onChange={ e => this.onChangeWithDebounce( e )}
        placeholder={ this.props.placeholder }
      />
    );
  }
}

Input.propTypes = propTypes;

export default Input;
