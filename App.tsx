import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { StatusBar } from 'react-native';
import colors from './src/config/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.darkBlue}/>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
