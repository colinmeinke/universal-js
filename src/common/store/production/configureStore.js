import createHistory from 'history/lib/createMemoryHistory';
import { combineReducers, createStore } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import { match } from 'redux-router/server';

import routes from '../../routes';

import * as reducers from '../../reducers';

const reducer = combineReducers({ ...reducers, router });

const configureStore = ( initialPath, initialState, reduxReactRouter ) => {
  const initialStore = reduxReactRouter({
    createHistory,
    routes,
  })( createStore )( reducer, initialState );

  initialStore.dispatch( match( initialPath, () => {}));

  return reduxReactRouter({
    createHistory,
    routes,
  })( createStore )( reducer, initialStore.getState());
}

export default configureStore;
