import React from 'react'
import { View, Text, SafeAreaView, Image, Dimensions, StyleSheet, StatusBar, TextInput, Keyboard, ScrollView } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import { useState } from 'react';
import DrawerContent from './DrawerContent';
//import { SearchBar } from 'react-native-elements';
import { Feather, Entypo, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const DailyIdeas = ({navigation}) => {

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
      <ScrollView>
        <View style={styles.ideasContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.tagView}>
              <Feather name="tag" size={16} color="white" />
              <Text style={{fontSize: 14, color: 'white', paddingLeft: 5}}>PROMOTE</Text>
            </View>
            <Text style={{paddingTop: 15, fontSize: 16}}>You added a new brownie recipe, how about we promote it?</Text>
          </View>
          <View style={styles.cardContainerDaily}>
            <View style={styles.tagView}>
              <MaterialIcons name="local-fire-department" size={16} color="white" />
              <Text style={{fontSize: 14, color: 'white', paddingLeft: 5}}>DAILY IDEA</Text>
            </View>
            <Text style={{paddingTop: 15, fontSize: 16,}}>Yesterday you had less than average people walk in, into the store, let's try incentivising them with a sale.</Text>
          </View>
          <View style={styles.cardContainerDaily}>
            <View style={styles.tagView}>
              <MaterialCommunityIcons name="power-plug-outline" size={16} color="white" />
              <Text style={{fontSize: 13, color: 'white', paddingLeft: 5}}>BANNER IDEA</Text>
            </View>
            <Text style={{paddingTop: 15, fontSize: 16}}>We ended up wasting 2 chocolate cakes yesterday and they will expire today, want to put them on sale? </Text>
          </View>
        </View>
      </ScrollView>
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
    marginRight: 20,
    marginLeft: 20,
    height: 50,
    alignItems: 'center',
    borderColor: 'rgba(236, 236, 236, 1)',
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
  },
  searchBar: {
    display: 'flex',
    width: width - 80,
    height: 40,
    fontSize: 20,
    paddingLeft: 5,
  },
  ideasContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: height,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    flexWrap: 'wrap',
    height: height * 0.2,
    margin: 20,
    padding: 26,
    borderRadius: 10,
  },
  tagView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(58, 58, 60, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    width: 115,
    height: 30,
    borderRadius: 6,
  },
  cardContainerDaily: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    flexWrap: 'wrap',
    height: height * 0.25,
    margin: 20,
    padding: 26,
    borderRadius: 10,
  },
})


export default DailyIdeas