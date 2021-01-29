import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
// import {persistStore, persistReducer} from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import reducers from './reducers';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   // whitelist: ['auth'],
// };

const logger = createLogger();

const enchancers = applyMiddleware(promiseMiddleware, logger);

// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(reducers, enchancers);
// export const store = createStore(persistedReducers, {}, enchancers);

// export const persistor = persistStore(store);

// export default () => {
//   let store = createStore(persistedReducer, enchancers);
//   let persistor = persistStore(store);
//   return {store, persistor};
// };
