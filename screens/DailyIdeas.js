import React from 'react'
import { View, Text, SafeAreaView, Image, Dimensions, SearchBar, TextInput } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import { useState } from 'react';
//import { SearchBar } from 'react-native-elements';

const DailyIdeas = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [search, onChangeSearch] = React.useState();
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Image source={require('../assets/logo.png')} style={{
        width: 138,
        height: 45,
        bottom: windowHeight * 0.312,
        }} 
      />

      <Octicons name="three-bars" size={25} color="rgba(16, 16, 16, 1)" style={{ bottom: windowHeight * 0.362, right: windowWidth * 0.42}} />

      <TextInput
                style={{
                    bottom: windowHeight * 0.312,
                    height: 35,
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: 'rgba(214, 214, 214, 0.6)',
                    width: windowWidth * 0.9,
                }}
                autoCapitalize="none"
                placeholderTextColor={'rgba(16, 16, 16, 0.8)'}
                placeholder="Find your collection"
                onChangeText={onChangeSearch}
                value={search} 
              />

    </SafeAreaView>
  )
}

export default DailyIdeas