import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import Home from '../screens/Home';
import {
  transferInput,
  transferPin,
  transferConfirm,
  transferSuccess,
  transferFailed,
} from '../screens/transfer';
import Contact from '../screens/Contact';
import History from '../screens/History';

const Stack = createStackNavigator();

const MainRouter = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="transfer"
        component={transferInput}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="confirmation"
        component={transferConfirm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="pinToTransfer"
        component={transferPin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="transferSuccess"
        component={transferSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="transferFailed"
        component={transferFailed}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          title: 'History',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainRouter;
