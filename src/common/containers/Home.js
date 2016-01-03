import DocumentTitle from 'react-document-title';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Title from '../components/Title';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const Home = ({ children, name }) => (
  <DocumentTitle title={ `Hello ${ name }` }>
    <section>
      <Title name={ name } />
      { children }
    </section>
  </DocumentTitle>
);

Home.propTypes = propTypes;

const mapStateToProps = state => ({
  name: state.name,
});

const HomeContainer = connect( mapStateToProps )( Home );

export { Home };
export default HomeContainer;
