import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './src/Theme/ThemeContext';


export default function App() {
  return (
 
    <ThemeProvider>
      <>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#ffffff"
        />
        <AppNavigator />
      </>
    </ThemeProvider>
   
  );
}