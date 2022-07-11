import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'

const StartProject = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('../assets/logo.png')} style={{
        alignSelf: 'center',
        width: 125,
        height: 40,
        bottom: '35%',
      }} />
    </SafeAreaView>
    
  )
}

export default StartProject