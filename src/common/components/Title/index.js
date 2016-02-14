import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import baseStyles from './base.css';
import themeStyles from './oaxaca-theme.css';

const propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

class Title extends Component {
  render () {
    return (
      <div
        className={[
          baseStyles.container,
          themeStyles.container,
        ].join( ' ' )}
      >
        <Link
          className={[
            baseStyles.link,
            themeStyles.link,
          ].join( ' ' )}
          to={ this.props.to }
        >
          <h1
            className={[
              baseStyles.title,
              themeStyles.title,
            ].join( ' ' )}
          >
            { this.props.text }
          </h1>
        </Link>
      </div>
    );
  }
}

Title.propTypes = propTypes;

export default Title;
