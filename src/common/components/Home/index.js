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
        text={ `Hello ${ name }` }
        to={[ 'edit', { name }]}
      />
      { children }
    </section>
  </DocumentTitle>
);

Home.propTypes = propTypes;

export default Home;
