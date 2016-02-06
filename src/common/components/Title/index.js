import React, { PropTypes } from 'react';
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

const Title = ({ text, to }) => (
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
      to={ to }
    >
      <h1
        className={[
          baseStyles.title,
          themeStyles.title,
        ].join( ' ' )}
      >
        { text }
      </h1>
    </Link>
  </div>
);

Title.propTypes = propTypes;

export default Title;
