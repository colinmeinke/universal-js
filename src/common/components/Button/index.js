import React, { Component, PropTypes } from 'react';

import baseStyles from './base.css';
import themeStyles from './oaxaca-theme.css';

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
        className={[
          baseStyles.regular,
          themeStyles.regular,
          ...( this.props.isUpdating ? [
            baseStyles.updating,
            themeStyles.updating,
          ] : []),
        ].join( ' ' )}
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
