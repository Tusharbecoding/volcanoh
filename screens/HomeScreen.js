import React from 'react';
import { SafeAreaView, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';


const HomeScreen = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    

    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home Screen</Text>
        </SafeAreaView>
    );
};

export default HomeScreen;