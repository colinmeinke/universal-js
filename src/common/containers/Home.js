import DocumentTitle from 'react-document-title';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Title from '../components/Title';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const Home = props => (
  <DocumentTitle title={ `Hello ${ props.name }` }>
    <section>
      <Title name={ props.name } />
      { props.children }
    </section>
  </DocumentTitle>
);

Home.propTypes = propTypes;

const HomeContainer = connect( state => ({
  name: state.name,
}))( Home );

export { Home };
export default HomeContainer;
