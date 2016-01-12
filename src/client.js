import React from 'react';
import { render } from 'react-dom';
import { updateUrl } from 'universal-redux-router';

import configureStore from './common/store/configureStore';

import Root from './common/components/Root';

const store = configureStore( window.__INITIAL_STATE__ );

window.addEventListener( 'popstate', () => {
  const { hash, pathname, search } = window.location;
  const url = pathname + search + hash;
  store.dispatch( updateUrl( url ));
});

render(
  <Root store={ store } />,
  document.querySelector( '.app' )
);
