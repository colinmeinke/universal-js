import React from 'react';
import { Route } from 'react-router';

import Home from '../containers/Home';
import Edit from '../containers/Edit';

const routes = (
  <Route component={ Home } path="/">
    <Route component={ Edit } path="edit" />
  </Route>
);

export default routes;
