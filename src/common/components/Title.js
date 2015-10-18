import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import * as coreStyle from '../styles/components/title';
import * as themeStyle from '../styles/themes/oaxaca/components/title';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const Title = props => (
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
      to={ `/edit?name=${ props.name }` }
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

        Hello { props.name }

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

Title.propTypes = propTypes;

export default Title;
