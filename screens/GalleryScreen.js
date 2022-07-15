import { Text, View, SafeAreaView, Image, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'


const GalleryScreen = ({}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Gallery</Text>
    </SafeAreaView>
  )
}

export default GalleryScreen

