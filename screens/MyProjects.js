import React from 'react'
import { View, Text, SafeAreaView, Image, Dimensions, StyleSheet } from 'react-native'
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

      <Image 
      style= {styles.image}
      source={{
        uri: 'https://firebasestorage.googleapis.com/v0/b/volcanoh-3ca19.appspot.com/o/images%2F12efe2b6-ec4e-4ebc-86a7-ac135d21436c?alt=media&token=18033535-35a1-4a6f-9126-6cae556bd0b9'
      }}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  }
})

export default MyProjects
