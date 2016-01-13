import React, { PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import coreStyles from './core.css';
import themeStyles from './oaxaca-theme.css';

const propTypes = {
  linkUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Title = ({ linkUrl, text }) => (
  <div
    className={[
      coreStyles.container,
      themeStyles.container,
    ].join( ' ' )}
  >
    <Link
      className={[
        coreStyles.link,
        themeStyles.link,
      ].join( ' ' )}
      url={ linkUrl }
    >
      <h1
        className={[
          coreStyles.title,
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
