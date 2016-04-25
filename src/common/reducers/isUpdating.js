import { REQUEST_UPDATE, COMPLETE_UPDATE } from '../actions/isUpdating';

const isUpdating = ( state = false, action ) => {
  switch ( action.type ) {
    case REQUEST_UPDATE:
      return true;
    case COMPLETE_UPDATE:
      return false;
    default:
      return state;
  }
};

export default isUpdating;
