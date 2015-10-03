import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Title from '../components/title/Title';

const propTypes = {
  name: PropTypes.string,
};

@connect( state => ({
  name: state.name,
}))

class Home extends Component {
  render () {
    return (
      <section>
        <Title name={ this.props.name } />
        { this.props.children }
      </section>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
