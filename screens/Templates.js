import React from 'react'
import { View, Text, SafeAreaView, Image, Dimensions, StyleSheet, StatusBar, TextInput, Keyboard } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import { useState } from 'react';
import DrawerContent from './DrawerContent';
//import { SearchBar } from 'react-native-elements';
import { Feather, Entypo } from "@expo/vector-icons";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Templates = ({navigation}) => {

  const [text, onChangeText] = React.useState();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="three-bars" size={27} color="black" onPress={() => navigation.openDrawer()}/>
        <Image source={require('../assets/logo.png')} style={styles.title}/>
        <Text></Text>
      </View>
      <View style={styles.searchBarView}>
        <Feather name="search" size={30} color="black" />
        <TextInput autoCapitalize="none" onChangeText={onChangeText} value={text} style={styles.searchBar}/>
      </View>
      <View style={styles.ideasContainer}>
      
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
    paddingTop: StatusBar.currentHeight + 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    display: 'flex',
    width: 160,
    height: 45,
  },
  searchBarView: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    height: 50,
    alignItems: 'center',
    borderColor: 'rgba(236, 236, 236, 1)',
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
  },
  searchBar: {
    display: 'flex',
    width: width - 60,
    height: 40,
    fontSize: 20,
    paddingLeft: 5,
  }
})


export default Templates