import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import * as coreStyle from '../styles/components/title';
import * as themeStyle from '../styles/themes/oaxaca/components/title';

const propTypes = {
  name: PropTypes.string.isRequired,
};

class Title extends Component {
  render () {
    return (
      <div
        style={{
          ...( coreStyle.container || {}),
          ...( themeStyle.container || {}),
        }}
      >
        <Link
          style={{
            ...( coreStyle.link || {}),
            ...( themeStyle.link || {}),
          }}
          to={ `/edit?name=${ this.props.name }` }
        >
          <h1
            style={{
              ...( coreStyle.title || {}),
              ...( themeStyle.title || {}),
            }}
          >
            <span
              style={{
                ...( coreStyle.before || {}),
                ...( themeStyle.before || {}),
              }}
            >
            </span>

            Hello { this.props.name }

            <span
              style={{
                ...( coreStyle.after || {}),
                ...( themeStyle.after || {}),
              }}
            >
            </span>
          </h1>
        </Link>
      </div>
    );
  }
}

Title.propTypes = propTypes;

export default Title;
