import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import StartProject from '../screens/StartProject';
import AddDevice from '../screens/AddDevice';
import Help from '../screens/Help';
import StartProjectRight from '../screens/StartProjectRight';
import GalleryScreen from '../screens/GalleryScreen';
import { DrawerContent } from '../screens/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator independent={true} screenOptions={{headerShown: false}} drawerContent = {(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Add Device" component={AddDevice} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  )
}

export default function UserStack() {
  return (
    <NavigationContainer independent={true}>
      
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Drawer" component={DrawerStack} screenOptions={{headerShown: false}} />
        <Stack.Screen name="StartProject" component={StartProject} />
        <Stack.Screen name="StartProjectRight" component={StartProjectRight} />
        <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}