import React from 'react'
import { View, Text, SafeAreaView, Image, Dimensions, StyleSheet } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import { useState } from 'react';
import DrawerContent from './DrawerContent';
//import { SearchBar } from 'react-native-elements';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const DailyIdeas = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="three-bars" size={27} color="black" onPress={() => navigation.openDrawer()}/>
        <Image source={require('../assets/logo.png')} style={styles.title}/>
        <Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  header: {
    display: 'flex',
    padding: 10,
    marginTop: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    display: 'flex',
    width: 160,
    height: 45,
  }
})


export default DailyIdeas