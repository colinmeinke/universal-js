import React from 'react';

import Home from './containers/Home';
import Edit from './containers/Edit';

const routes = url => {
  const path = url.split( '?' )[ 0 ];

  switch ( path ) {
    case '/edit':
      return <Edit />;
    case '/':
      return <Home />;
    default:
      return <h1>Not found</h1>;
  }
};

export default routes;
