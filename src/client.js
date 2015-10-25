import React from 'react';
import { render } from 'react-dom';
import { reduxReactRouter } from 'redux-router';

import configureStore from './common/store/configureStore';
import Root from './common/containers/Root';

const store = configureStore(
  window.location.pathname,
  JSON.parse( window.__INITIAL_STATE__ ),
  reduxReactRouter
);

render(
  <Root store={ store } />,
  document.querySelector( '.root' )
);
