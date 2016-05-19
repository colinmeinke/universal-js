import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';

import configureStore from './common/store/configureStore';

import Root from './common/components/Root';

const { hash, pathname, search } = window.location;
const url = pathname + search + hash;

configureStore({ url }).then( store => {
  render(
    <AppContainer>
      <Root store={ store } />
    </AppContainer>,
    document.querySelector( '.app' )
  );

  if ( __DEVELOPMENT__ && module.hot ) {
    module.hot.accept([ './common/components/Root', './common/store/configureStore' ], () => {
      const NextRoot = require( './common/components/Root' ).default;

      render(
        <AppContainer>
          <NextRoot store={ store } />
        </AppContainer>,
        document.querySelector( '.app' )
      );
    });
  }
}).catch( console.error.bind( console ));
