import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
  whitelist: ['auth'],
};

const logger = createLogger();

const enchancers = applyMiddleware(promiseMiddleware, logger);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enchancers);
export const persistor = persistStore(store);
