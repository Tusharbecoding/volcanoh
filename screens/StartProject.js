import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker';
import StartProjectRight from './StartProjectRight';
import ApplyEffect from './ApplyEffect';
import DrawerContent from './DrawerContent';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthentication } from '../hook/useAuthentication';
import {StyleSheet} from 'react-native';

const auth = getAuth();
const Drawer = createDrawerNavigator();

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const StartProject = ({route, navigation}) => {
  
  const { user } = useAuthentication();

  const [image, setImage] = useState(null);
  const [rColor, setRColor] = useState(false);
  const [textColor, setTextColor] = useState(false);
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      navigation.navigate('StartProjectRight', {imageData: result.uri});
    }
    
  };

  

  const changeScreen = () => {
    if (image === null) {
      console.log('no image')
    }
    // navigation.navigate('StartProjectRight', { imageData: image });
  }

  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="three-bars" size={27} color="black" onPress={() => navigation.openDrawer()}/>
        <Image source={require('../assets/logo.png')} style={styles.title}/>
        <Text></Text>
      </View>
      <View style={styles.leftRightHeader}>
        <TouchableOpacity style={styles.leftTouch}>
          <Text style={styles.left}>Left</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightTouch}>
          <Text style={styles.right}>Right</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bannerContainer}>
        <View>
          <Image source={require('../assets/backgroundproject.png')} style={styles.banner}></Image>
        </View>
        <View style={styles.selectView}>
          <Text style={{width: 90, alignItems: 'center', fontWeight: '800', marginBottom: 10, }}>Tap to create a new banner</Text>
          <TouchableOpacity onPressIn={pickImage} onPress={changeScreen}>
            <Image source={require('../assets/Group9.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )



  // return (
  //   <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
  //   <Image source={require('../assets/logo.png')} style={{
  //       alignSelf: 'center',
  //       width: 160,
  //       height: 45,
  //       top: windowHeight * 0.045,
  //     }} />
  //     <Octicons name="three-bars" size={25} color="rgba(16, 16, 16, 1)" style={{right: windowWidth * 0.42, top: windowHeight * 0.001}} onPress={() => navigation.openDrawer()} />

  //     <TouchableOpacity 
  //     style={[(rColor) ? styles.unselBtn : styles.selBtn, styles.leftBtn]}
  //     onPress={handleToggleLeft}
  //     >
  //       <Text style={{color: 'black'}}
        
  //       >Left</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity 
  //     style = {[(rColor) ? (styles.selBtn) : (styles.unselBtn), styles.rightBtn]}
  //     onPress={handleToggleRight}
  //     >
  //       <Text
  //       style={{color: 'black'}}
        
  //       >Right</Text>
  //     </TouchableOpacity>
  //     <Image source={require('../assets/backgroundproject.png')} style={{top: windowHeight * 0.07}}></Image>
  //     <Text
  //     style={{
  //       fontWeight: 'bold',
  //       width: 90,
  //       zIndex: 1,
  //       bottom: windowHeight * 0.3,
  //     }}>Tap to create a new banner</Text>
  //     <TouchableOpacity style={{ zIndex: 1,
  //     bottom: windowHeight * 0.28,}} onPressIn={pickImage} onPress={changeScreen}>
  //     <Image source={require('../assets/Group9.png')}></Image>
  //     </TouchableOpacity>
      
  //   </SafeAreaView>
    
  // )
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
  },
  leftRightHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height * 0.08,
    
    marginTop: 10,
    width: width,
  },
  leftTouch: {
    
    display: 'flex',
    height: "100%",
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  rightTouch: {
    
    display: 'flex',
    height: "100%",
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    fontSize: 18,
  },
  right: {
    fontSize: 18,
  },
  bannerContainer: {
    display: 'flex',
    height: 500,
    margin: 10,
    marginTop: 30,
    borderRadius: 15,
  },
  banner : {
    display: 'flex',
    height: "100%",
    width: "100%",
  },
  selectView: {
    display: 'flex',
    position: 'absolute',
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default StartProject