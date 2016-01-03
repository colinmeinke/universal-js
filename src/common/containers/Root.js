import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'universal-redux-router';

import routes from '../routes';

const Root = ({ store }) => {
  let devTools;

  if ( __DEVELOPMENT__ ) {
    const DevTools = require( './DevTools' ).default;
    devTools = <DevTools />;
  }

  return (
    <Provider store={ store }>
      <div>
        <Router routes={ routes } />
        { devTools }
      </div>
    </Provider>
  );
};

export default Root;
