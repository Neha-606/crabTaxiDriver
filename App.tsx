import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { ThemeProvider } from './src/Theme/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ffffff"
        />
        <AppNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}