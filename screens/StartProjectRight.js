import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import * as ImagePicker from 'expo-image-picker';
import StartProject from './StartProject';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const StartProjectRight = ({route, navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { imageData } = route.params;
  


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
    <Image source={require('../assets/logo.png')} style={{
        alignSelf: 'center',
        width: 138,
        height: 45,
        top: windowHeight * 0.06,
      }} />
      <Octicons name="three-bars" size={25} color="rgba(16, 16, 16, 1)" style={{right: windowWidth * 0.4, top: windowHeight * 0.01}} />
      
      {imageData && <Image source={{ uri: imageData }} style={{
         top: windowHeight * 0.04,
         width: windowWidth * 0.9, height: windowHeight * 0.78, borderRadius: 20 }} />}
      <TouchableOpacity 
      style={{
      
        top: windowWidth * 0.085,
        right: windowWidth * 0.27,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: windowWidth * 0.2,  
        paddingRight: windowWidth * 0.27,
        borderTopWidth:0,
        borderRightWidth:0,
        borderWidth: 1,
      }}>
        <Text style={{color: 'black',}}>Left</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{
        bottom: windowWidth * 0.01,
        left: windowWidth * 0.27,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: windowWidth * 0.27,  
        paddingRight: windowWidth * 0.2,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderWidth: 0,
      }}>
        <Text style={{color: 'rgba(174, 174, 178, 1)',}}>Right</Text>
      </TouchableOpacity>
      
      
    </SafeAreaView>
    
  )
}

export default StartProjectRight