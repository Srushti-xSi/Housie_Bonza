import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/SplashScreen/Splash';
import Welcome from '../screens/Welcome/Welcome';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import RoomCode from '../screens/RoomCode/RoomCode';
import Play from '../screens/Play/Play';


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
      <Stack.Screen
        name="Login"
        component={Login}

        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"

        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RoomCode"

        component={RoomCode}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Play"

        component={Play}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;