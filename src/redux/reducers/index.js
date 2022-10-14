import { combineReducers } from 'redux';

import usersReducer from './users';
import reportsReducer from './reports';
import teamReducer from './team';

export default combineReducers({ usersReducer, reportsReducer, teamReducer });