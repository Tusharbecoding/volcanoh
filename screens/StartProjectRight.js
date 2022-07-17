import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import * as ImagePicker from 'expo-image-picker';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const StartProjectRight = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
    <Image source={require('../assets/logo.png')} style={{
        alignSelf: 'center',
        width: 138,
        height: 45,
        bottom: windowHeight * 0.3,
      }} />
      <Octicons name="three-bars" size={25} color="rgba(16, 16, 16, 1)" style={{right: windowWidth * 0.4, bottom: windowHeight * 0.35}} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <TouchableOpacity 
      style={{
      
        top: windowWidth * 0.72,
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
        top: windowHeight * 0.378 ,
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