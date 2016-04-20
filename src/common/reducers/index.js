import { routerReducer } from 'universal-redux-router';

import isUpdating from './isUpdating';
import name from './name';

export default routerReducer({ isUpdating, name });
