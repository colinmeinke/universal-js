import React, { PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import baseStyles from './base.css';
import themeStyles from './oaxaca-theme.css';

const propTypes = {
  linkUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Title = ({ linkUrl, text }) => (
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
      url={ linkUrl }
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
