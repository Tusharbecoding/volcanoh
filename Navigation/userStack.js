import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import StartProject from '../screens/StartProject';
import StartProjectRight from '../screens/StartProjectRight';
import GalleryScreen from '../screens/GalleryScreen';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="StartProject" component={StartProject} />
        <Stack.Screen name="StartProjectRight" component={StartProjectRight} />
        <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}