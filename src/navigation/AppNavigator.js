import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigation';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />

      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
      />

    </Stack.Navigator>

  );

}