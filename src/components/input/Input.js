import React, { Component, PropTypes } from 'react';

import * as coreStyle from './style';
import * as themeStyle from '../../themes/oaxaca/components/input';

const propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

class Input extends Component {
  render () {
    return (
      <input
        name={ this.props.name }
        onChange={ e => this.props.onChange( e.target.value )}
        placeholder={ this.props.placeholder }
        style={{
          ...( coreStyle.regular || {}),
          ...( themeStyle.regular || {}),
        }}
        value={ this.props.value }
      />
    );
  }
}

Input.propTypes = propTypes;

export default Input;
