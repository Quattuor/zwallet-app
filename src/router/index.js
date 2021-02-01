import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/auth/Login';
import Sign_Up from '../screens/auth/Sign_Up';

const Stack = createStackNavigator();

const MainRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up"
        component={Sign_Up}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainRouter;
