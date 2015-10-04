import createHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, compose, createStore } from 'redux';
import { reduxReactRouter, ReduxRouter, routerStateReducer } from 'redux-router';

import config from './common/config';
import routes from './common/routes';

import * as reducers from './reducers';

const history = createHistory();

const reducer = combineReducers({
  ...reducers,
  router: routerStateReducer,
});

const initialState = JSON.parse( window.__INITIAL_STATE__ );

let debugPanel;
let store;

if ( __DEVELOPMENT__ ) {
  const { devTools } = require( 'redux-devtools' );
  const { DebugPanel, DevTools, LogMonitor } = require( 'redux-devtools/lib/react' );

  store = compose(
    reduxReactRouter({
      history,
      routes,
    }),
    devTools()
  )( createStore )( reducer, initialState );

  debugPanel = (
    <DebugPanel bottom right top>
      <DevTools monitor={ LogMonitor }
                store={ store } />
    </DebugPanel>
  );
} else {
  store = reduxReactRouter({
    history,
    routes,
  })( createStore )( reducer, initialState );
}

render(
  <div>
    <Provider store={ store }>
      <ReduxRouter routes={ routes } />
    </Provider>
    { debugPanel }
  </div>,
  document.querySelector( '.app' )
);
