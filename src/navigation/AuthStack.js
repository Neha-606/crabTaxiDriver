import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../auth/Login'

import Register from '../auth/Register'
import OtpScreen from '../auth/Otp'
import ChooseVehicle from '../auth/ChooseVehicle'

const Stack = createNativeStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen
            name='Login'
            component={Login}
        ></Stack.Screen>
       

        <Stack.Screen
            name='Register'
            component={Register}
        ></Stack.Screen>

        <Stack.Screen
            name='OtpScreen'
            component={OtpScreen}
        ></Stack.Screen>

        <Stack.Screen
            name='ChooseVehicle'
            component={ChooseVehicle}
        ></Stack.Screen> 

    </Stack.Navigator>
  )
}

export default AuthStack