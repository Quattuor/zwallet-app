import {combineReducers} from 'redux';
import authReducer from './auth';
import contactReducer from './contact';
import historyReducer from './history';

const reducers = combineReducers({
  auth: authReducer,
  contact: contactReducer,
  history: historyReducer,
});

export default reducers;
