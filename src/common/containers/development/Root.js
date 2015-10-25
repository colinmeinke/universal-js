import React from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import DevTools from '../DevTools';

const Root = props => (
  <Provider store={ props.store }>
    <div>
      <ReduxRouter />
      <DevTools />
    </div>
  </Provider>
);

export default Root;
