import React, { Component, PropTypes } from 'react';

import * as coreStyle from './style';
import * as themeStyle from '../../themes/oaxaca/components/button';

const defaultProps = {
  type: 'button',
};

const propTypes = {
  isUpdating: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  updatingText: PropTypes.string.isRequired,
};

class Button extends Component {
  render () {
    return (
      <button
        style={{
          ...( coreStyle.regular || {}),
          ...( themeStyle.regular || {}),
          ...( this.props.isUpdating ? {
            ...( coreStyle.updating || {}),
            ...( themeStyle.updating || {}),
          } : {}),
        }}
        type={ this.props.type }
      >
        { this.props.isUpdating ? this.props.updatingText : this.props.text }
      </button>
    );
  }
}

Button.defaultProps = defaultProps;

Button.propTypes = propTypes;

export default Button;
