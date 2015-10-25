import React from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

const Root = props => (
  <Provider store={ props.store }>
    <ReduxRouter />
  </Provider>
);

export default Root;
