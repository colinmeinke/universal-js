import classNames from 'classnames';
import React, { PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import coreStyles from './core.css';
import themeStyles from './oaxaca-theme.css';

const containerClasses = classNames( coreStyles.container, themeStyles.container );
const linkClasses = classNames( coreStyles.link, themeStyles.link );
const titleClasses = classNames( coreStyles.title, themeStyles.title );

const propTypes = {
  linkUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Title = ({ linkUrl, text }) => (
  <div className={ containerClasses }>
    <Link
      className={ linkClasses }
      url={ linkUrl }
    >
      <h1 className={ titleClasses }>
        { text }
      </h1>
    </Link>
  </div>
);

Title.propTypes = propTypes;

export default Title;
