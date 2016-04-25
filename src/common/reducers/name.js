import { UPDATE_NAME } from '../actions/name';

const name = ( state = '', action ) => {
  switch ( action.type ) {
    case UPDATE_NAME:
      return action.name;
    default:
      return state;
  }
};

export default name;
