import { applyMiddleware, compose, createStore } from 'redux';
import { getState, routerMiddleware, routerReducer } from 'universal-redux-router';

import * as reducers from '../reducers';
import routes from '../config/routes';

const reducer = routerReducer( reducers );

const configureStore = ({ isServer = false, url = '/' } = {}) => {
  const state = getState( url, routes, reducer );

  const middleware = applyMiddleware( routerMiddleware( routes, { isServer }));

  const enhancer = __DEVELOPMENT__ ? compose(
    middleware, require( '../components/DevTools' ).default.instrument()
  ) : middleware;

  return createStore( reducer, state, enhancer );
};

export default configureStore;
