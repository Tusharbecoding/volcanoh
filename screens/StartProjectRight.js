import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, Picker, Dimensions, Button, TouchableOpacity, ScrollView,Modal } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';
import StartProject from './StartProject';
import HomeScreen from './HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate
} from 'react-native-color-matrix-image-filters'

const StartProjectRight = ({route, navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { imageData } = route.params;
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
      <Image source={require('../assets/logo.png')} style={{
        alignSelf: 'center',
        width: 138,
        height: 45,
        top: windowHeight * 0.24,
        }} 
      />
      <Octicons name="three-bars" size={25} color="rgba(16, 16, 16, 1)" style={{right: windowWidth * 0.4, top: windowHeight * 0.19}} />
      <Entypo name="cross" size={30} color="white" style={{right: windowWidth * 0.4, top: windowHeight * 0.24, right: windowWidth * 0.38  ,zIndex: 2}} onPress={() => navigation.navigate('HomeScreen')} />
      <TouchableOpacity style={{zIndex:2}}>
      <Image source={require('../assets/text.png')} style={{top: windowHeight * 0.192, left:windowWidth * 0.11 ,zIndex: 2, opacity: 0.8}}/>
      <Image source={require('../assets/ticon.png')} style={{top: windowHeight * 0.152, left:windowWidth * 0.1445 ,zIndex: 2}}/></TouchableOpacity>
      <TouchableOpacity style={{zIndex:2}}>
      <Image source={require('../assets/improve.png')} style={{top: windowHeight * 0.11, left: windowWidth * 0.23 ,zIndex: 2}}/></TouchableOpacity>
      
      
      <TouchableOpacity style={{"zIndex":2}}>
      <Image source={require('../assets/text.png')} style={{top: windowHeight * 0.05, left: windowWidth * 0.35,zIndex: 2, opacity: 0.8}}/>
      <Image source={require('../assets/options.png')} style={{top: windowHeight * 0.003, left: windowWidth * 0.372 ,zIndex: 2}}/>
      </TouchableOpacity>
      
      
      {imageData && <Image source={{ uri: imageData }} style={{
         bottom: windowHeight * 0.06, resizeMode: 'stretch',
         width: windowWidth * 0.9, height: windowHeight * 0.78, borderRadius: 20 }} />}
      <TouchableOpacity style={{width: "80%",
        borderRadius: 20,
        width: 136,
        height: 46,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(181, 56, 62, 1)",
        bottom: windowHeight * 0.15,
        left: windowWidth * 0.24,
        zIndex: 2,
      }}
        
      >
      <Text style={{color:'white', fontWeight: '600', fontSize: 15}}>Publish</Text></TouchableOpacity>
      <TouchableOpacity 
      style={{
        bottom: windowWidth * 0.2,
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
        bottom: windowWidth * 0.297,
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