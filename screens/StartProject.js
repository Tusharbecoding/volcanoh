import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker';
import StartProjectRight from './StartProjectRight';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthentication } from '../hook/useAuthentication';

const auth = getAuth();
const Drawer = createDrawerNavigator();


const StartProject = ({route, navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { user } = useAuthentication();

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
      navigation.navigate('StartProjectRight', {imageData: result.uri});
    }
  };

  

  const changeScreen = () => {
    if (image === null) {
      console.log('no image')
    }
    // navigation.navigate('StartProjectRight', { imageData: image });
  }



  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
    <Image source={require('../assets/logo.png')} style={{
        alignSelf: 'center',
        width: 138,
        height: 45,
        top: windowHeight * 0.045,
      }} />
      <Octicons name="three-bars" size={25} color="rgba(16, 16, 16, 1)" style={{right: windowWidth * 0.42, top: windowHeight * 0.001}} onPress={() => signOut(auth)} />

      <TouchableOpacity 
      style={{
      
        bottom: windowWidth * -0.145,
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
        bottom: windowHeight * -0.03 ,
        left: windowWidth * 0.27,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: windowWidth * 0.27,  
        paddingRight: windowWidth * 0.2,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderWidth: 0,
      }}
      >
        <Text style={{color: 'rgba(174, 174, 178, 1)',}}>Right</Text>
      </TouchableOpacity>
      <Image source={require('../assets/backgroundproject.png')} style={{top: windowHeight * 0.07}}></Image>
      <Text
      style={{
        fontWeight: 'bold',
        width: 90,
        zIndex: 1,
        bottom: windowHeight * 0.3,
      }}>Tap to create a new banner</Text>
      <TouchableOpacity style={{ zIndex: 1,
      bottom: windowHeight * 0.28,}} onPressIn={pickImage} onPress={changeScreen}>
      <Image source={require('../assets/Group9.png')}></Image>
      </TouchableOpacity>
      
    </SafeAreaView>
    
  )
}

export default StartProject