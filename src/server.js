import express from 'express';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { ReduxRouter, routerStateReducer } from 'redux-router';
import { match, reduxReactRouter } from 'redux-router/server';

import config from './common/config';
import routes from './common/routes';

import * as reducers from './common/reducers';

import Edit from './common/containers/Edit';
import Home from './common/containers/Home';

import Page from './common/components/Page';

let scripts = [ ...config.scripts ];

const app = express();

app.use( express.static( 'static' ));

if ( __DEVELOPMENT__ ) {
  const webpackConfig = require( '../webpack/development/client.config' );
  const compiler = require( 'webpack' )( webpackConfig );

  app.use( require( 'webpack-dev-middleware' )( compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use( require( 'webpack-hot-middleware' )( compiler ));

  scripts = scripts.map( script => {
    return script.replace( '.min', '' );
  });
}

function handleRender ( req, res ) {
  const reducer = combineReducers({
    ...reducers,
    router: routerStateReducer,
  });

  const initialState = { 'name': req.query.name || '' };

  const store = reduxReactRouter({
    routes,
  })( createStore )( reducer, initialState );

  store.dispatch( match( req.path, () => {
    res.send( renderFullPage(
      renderToString(
        <Provider store={ store }>
          <ReduxRouter />
        </Provider>
      ),
      store.getState()
    ));
  }));
};

function renderFullPage ( html, state ) {
  return '<!DOCTYPE html>' +
    renderToStaticMarkup(
      <Page
        html={ html }
        scripts={ scripts }
        state={ JSON.stringify( state )}
        title="Hello world"
      />
    );
};

app.use( handleRender );

app.listen( 3000 );
