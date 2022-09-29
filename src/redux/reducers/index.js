import { combineReducers } from 'redux';

import usersReducer from './users';
import reportsReducer from './reports'

export default combineReducers({ usersReducer, reportsReducer });