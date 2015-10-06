import DocumentTitle from 'react-document-title';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Title from '../components/Title';

const propTypes = {
  name: PropTypes.string.isRequired,
};

class Home extends Component {
  render () {
    return (
      <DocumentTitle title={ `Hello ${ this.props.name }` }>
        <section>
          <Title name={ this.props.name } />
          { this.props.children }
        </section>
      </DocumentTitle>
    );
  }
}

Home.propTypes = propTypes;

const ConnectedHome = connect( state => ({
  name: state.name,
}))( Home );

export { Home };
export default ConnectedHome;
