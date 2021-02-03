import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SocketProvider} from './utils/context/socketProvider';
import {store, persistor} from './utils/redux/store';
import MainRouter from './router';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <SocketProvider
        id={
          //place id_user here
          22
        }>
        <NavigationContainer>
          <MainRouter />
        </NavigationContainer>
      </SocketProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
