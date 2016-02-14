import React from 'react';

import Home from '../components/Home';
import Edit from '../components/Edit';

import { updateName } from '../actions/name';

const getRoutes = () => ([
  [ '/', { name: updateName }, <Home /> ],
  [ 'edit', { name: updateName }, <Edit /> ],
  [ '*', <h1>Not found</h1> ],
]);

let routes = getRoutes();

if ( __DEVELOPMENT__ && module.hot ) {
  module.hot.accept();
  routes = getRoutes();
}

export default routes;
