import 'react-native-get-random-values';
import { SafeAreaView, ScrollView, Text, View, Image, Button, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Octicons from 'react-native-vector-icons/Octicons';
import React, {useState} from 'react'
import StartProject from './StartProject';
import StartProjectRight from './StartProjectRight';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
  
const ApplyEffect = ({route, navigation}) => {
  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="three-bars" size={30} color="rgba(16, 16, 16, 1)" onPress={() => navigation.openDrawer()} />
        <Image source={require('../assets/logo.png')} style={styles.title}/>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/image12.png')}/>
      </View>
    </View>
  )
}


export default ApplyEffect

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginTop: 70,
    alignItems: 'center',
  },
  title:{
    display: 'flex',
    width: 180,
    height: 50,
    marginLeft: width * 0.2,
  },
  imageContainer: {
    height: height * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  }
})