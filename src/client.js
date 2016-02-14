import React from 'react';
import { render } from 'react-dom';

import configureStore from './common/store/configureStore';

import Root from './common/components/Root';

const { hash, pathname, search } = window.location;
const url = pathname + search + hash;

configureStore({ url }).then( store => {
  render(
    <Root store={ store } />,
    document.querySelector( '.app' )
  );
}).catch( console.error.bind( console ));
