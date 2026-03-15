import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import CustomDrawerContent from '../component/CustomDrawer'

//import Documents from '../screens/Documents'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
   <Drawer.Navigator screenOptions={{
    headerShown: false ,
    drawerPosition: 'right'}}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    >

    <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>

   </Drawer.Navigator>
  )
}

export default DrawerNavigator