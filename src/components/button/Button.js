import React, { Component, PropTypes } from 'react';

import * as coreStyle from './style';
import * as themeStyle from '../../themes/oaxaca/components/button';

const defaultProps = {
  type: 'button',
};

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

class Button extends Component {
  render () {
    return (
      <button
        style={{
          ...( coreStyle.regular || {}),
          ...( themeStyle.regular || {}),
        }}
        type={ this.props.type }
      >
        { this.props.text }
      </button>
    );
  }
}

Button.defaultProps = defaultProps;

Button.propTypes = propTypes;

export default Button;
