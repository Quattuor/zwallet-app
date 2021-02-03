import {combineReducers} from 'redux';
import authReducer from './auth';
import contactReducer from './contact';

const reducers = combineReducers({
  auth: authReducer,
  contact: contactReducer,
});

export default reducers;
