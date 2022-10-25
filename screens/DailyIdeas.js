import React from 'react'
import { View, Text, SafeAreaView, Image, Dimensions, StyleSheet, StatusBar, TextInput, Keyboard } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import { useState } from 'react';
import DrawerContent from './DrawerContent';
//import { SearchBar } from 'react-native-elements';
import { Feather, Entypo } from "@expo/vector-icons";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const DailyIdeas = ({navigation, clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="three-bars" size={27} color="black" onPress={() => navigation.openDrawer()}/>
        <Image source={require('../assets/logo.png')} style={styles.title}/>
        <Text></Text>
      </View>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
      <Feather
      name="search"
      size={20}
      color="black"
      style={{ marginLeft: 1 }}
      />
      <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
      {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
      )}
      </View>
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
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
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
})


export default DailyIdeas