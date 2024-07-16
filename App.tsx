import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { UserProvider } from './src/context/UserContext';
import { StatusBar } from 'react-native';
import colors from './src/config/colors';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.darkBlue}/>
        <Navigation />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
