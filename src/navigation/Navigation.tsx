import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/SplashScreen/Splash';
import Welcome from '../screens/Welcome/Welcome';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
};

export default Navigation;