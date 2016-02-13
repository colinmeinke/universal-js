import { applyMiddleware, compose, createStore } from 'redux';
import { getState, routerMiddleware, routerReducer } from 'universal-redux-router';

import * as reducers from '../reducers';
import routes from '../config/routes';

const reducer = routerReducer( reducers );

const configureStore = ({ isServer = false, url = '/' } = {}) => {
  const middleware = applyMiddleware( routerMiddleware( routes, { isServer }));

  const enhancer = __DEVELOPMENT__ ? compose(
    middleware, require( '../components/DevTools' ).default.instrument()
  ) : middleware;

  return new Promise(( resolve, reject ) => {
    getState( url, routes, reducer ).then( state => {
      const store = createStore( reducer, state, enhancer );

      if ( __DEVELOPMENT__ && module.hot ) {
        module.hot.accept( '../reducers', () => {
          const nextEnhancer = routerReducer( require( '../reducers/index' ));
          store.replaceReducer( nextEnhancer );
        });
      }

      resolve( store );
    }).catch( reject );
  });
};

export default configureStore;
