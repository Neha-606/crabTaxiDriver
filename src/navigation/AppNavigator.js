import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import SplashScreen from '../screens/SplashScreen'
import AuthStack from './AuthStack'
import DrawerNavigator from './DrawerNavigator'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen 
            name='Splash'
            component={SplashScreen}
        ></Stack.Screen>

        <Stack.Screen 
            name='AuthStack'
            component={AuthStack}
        ></Stack.Screen>

        <Stack.Screen 
            name='DrawerNavigator'
            component={DrawerNavigator}
        ></Stack.Screen>

    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator;