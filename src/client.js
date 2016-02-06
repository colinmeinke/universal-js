import React from 'react';
import { render } from 'react-dom';

import configureStore from './common/store/configureStore';

import Root from './common/components/Root';

const { hash, pathname, search } = window.location;
const url = pathname + search + hash;

const store = configureStore({ url });

render(
  <Root store={ store } />,
  document.querySelector( '.app' )
);
