import React from 'react'
import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import DrawerContent from './DrawerContent';


const MyProjects = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Image source={require('../assets/logo.png')} style={{
        width: 138,
        height: 45,
        bottom: windowHeight * 0.338,
        }} 
      />

      <Octicons name="three-bars" size={25} color="rgba(16, 16, 16, 1)" style={{ bottom: windowHeight * 0.387, right: windowWidth * 0.42}} onPress={() => navigation.openDrawer()}/>
    </SafeAreaView>
  )
}

export default MyProjects
