import React from 'react';

import Home from '../components/Home';
import Edit from '../components/Edit';

import { updateName } from '../actions/name';

const routes = [
  [ '/', { name: updateName }, <Home /> ],
  [ 'edit', { name: updateName }, <Edit /> ],
  [ '*', <h1>Not found</h1> ],
];

export default routes;
