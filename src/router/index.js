import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Contact from '../screens/Contact';
import History from '../screens/History';

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
