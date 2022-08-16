import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import StartProject from '../screens/StartProject';
import AddDevice from '../screens/AddDevice';
import Help from '../screens/Help';
import RateVolcanoh from '../screens/RateVolcanoh';
import PrivatePolicy from '../screens/PrivatePolicy';
import StartProjectRight from '../screens/StartProjectRight';
import GalleryScreen from '../screens/GalleryScreen';
import { DrawerContent } from '../screens/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerStack({navigation}) {
  return (
    <Drawer.Navigator independent={true} screenOptions={{headerShown: false}} drawerContent = {(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="StartProject" component={StartProject} />
      <Drawer.Screen name="StartProjectRight" component={StartProjectRight} />
      <Drawer.Screen name="AddDevice" component={AddDevice} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="RateVolcanoh" component={RateVolcanoh} />
      <Drawer.Screen name="PrivatePolicy" component={PrivatePolicy} />
    </Drawer.Navigator>
  )
}

export default function UserStack() {
  return (
    <NavigationContainer independent={true}>
      
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Drawer" component={DrawerStack} screenOptions={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StartProject" component={StartProject} />
        <Stack.Screen name="StartProjectRight" component={StartProjectRight} />
        <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}