import DocumentTitle from 'react-document-title';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Title from '../Title';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const Home = ({ name }) => (
  <DocumentTitle title={ `Hello ${ name }` }>
    <section>
      <Title
        text={ `Hello ${ name }` }
        to={[ 'edit', { name }]}
      />
    </section>
  </DocumentTitle>
);

Home.propTypes = propTypes;

const mapStateToProps = ({ name }) => ({ name });

export { Home };
export default connect( mapStateToProps )( Home );
