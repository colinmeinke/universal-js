import { UPDATE_NAME } from '../actions/name';

export default function name ( state = '', action ) {
  switch ( action.type ) {
    case UPDATE_NAME:
      return action.name;
    default:
      return state;
  }
}
