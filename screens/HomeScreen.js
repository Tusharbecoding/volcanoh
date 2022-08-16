import React from 'react';

import { SafeAreaView, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthentication } from '../hook/useAuthentication';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartProject from './StartProject';
import StartProjectRight from './StartProjectRight';
import MyProjects from './MyProjects';
import Register from './Register';
import Templates from './Templates';
import DailyIdeas from './DailyIdeas';


const Tab = createBottomTabNavigator();


const HomeScreen = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    return (
        <>
        
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size, padding}) => {
                let iconName;
                if (route.name === 'New Project') {
                    iconName = 'plus-circle';
                } else if (route.name === 'My Projects') {
                    iconName = 'folder'
                } else if (route.name === 'Templates') {
                    iconName = 'grid'
                } else {
                    iconName = 'smile'
                }
            
            
            return (
                <Feather name={iconName} size={size} color={color} style={{paddingBottom: padding}} />
            )},
        })}
        tabBarOptions={{
            showIcon: true,
            activeTintColor: 'rgba(16, 16, 16, 1)',
            inactiveTintColor: 'rgba(174, 174, 178, 1)',
        }}>
            <Tab.Screen name="New Project" component={StartProject} />
            <Tab.Screen name="My Projects" component={MyProjects} />
            <Tab.Screen name="Templates" component={Templates} />
            <Tab.Screen name="Daily Ideas" component={DailyIdeas} />
        </Tab.Navigator>
        </>
    );
};

export default HomeScreen;