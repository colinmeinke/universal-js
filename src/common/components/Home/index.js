import DocumentTitle from 'react-document-title';
import React, { PropTypes } from 'react';

import Title from '../Title';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const Home = ({ children, name }) => (
  <DocumentTitle title={ `Hello ${ name }` }>
    <section>
      <Title
        linkUrl={ `/edit?name=${ name }` }
        text={ `Hello ${ name }` }
      />
      { children }
    </section>
  </DocumentTitle>
);

Home.propTypes = propTypes;

export default Home;
