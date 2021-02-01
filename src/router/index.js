import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/auth/Login';
import Sign_Up from '../screens/auth/Sign_Up';
import Forgot_Pass from '../screens/auth/Forgot_Pass';
import Reset_Pass from '../screens/auth/Reset_Pass';
import Create_Pin from '../screens/auth/Create_Pin';

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
      <Stack.Screen
        name="Forgot Pass"
        component={Forgot_Pass}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Reset Pass"
        component={Reset_Pass}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Create Pin"
        component={Create_Pin}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainRouter;
