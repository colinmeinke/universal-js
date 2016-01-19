import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'universal-redux-router';

import routes from '../../config/routes';

let devTools;

if ( __DEVELOPMENT__ ) {
  const DevTools = require( '../DevTools' ).default;
  devTools = <DevTools />;
}

const propTypes = {
  store: PropTypes.object.isRequired,
};

class Root extends Component {
  render () {
    return (
      <Provider store={ this.props.store }>
        <div>
          <Router routes={ routes } />
          { devTools }
        </div>
      </Provider>
    );
  }
}

Root.propTypes = propTypes;

export default Root;
