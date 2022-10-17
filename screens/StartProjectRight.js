import 'react-native-get-random-values';
import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, Picker, Dimensions, Button, TouchableOpacity, ScrollView,Modal, StyleSheet } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';
// import {app} from '../firebase';
// import {firebase} from 'firebase/app';
// import { firebaseConfig } from '../firebaseconfig';
import { firebase } from '../firebaseconfig';
import { v4 as uuidv4 } from 'uuid';
import StartProject from './StartProject';
import HomeScreen from './HomeScreen';
import AddDevice from './AddDevice';
import ApplyEffect from './ApplyEffect';
import DrawerStack from '../Navigation/userStack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerContent from './DrawerContent';

// import { PIXI } from 'expo-pixi';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const StartProjectRight = ({route, navigation}) => {

  const [elementVisible, setElementVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [stickerVisible, setStickerVisible] = useState(false);
  const { imageData } = route.params;
  const [uploading, setUploading] = useState(false);
  const uploadImage = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', imageData, true);
      xhr.send(null);
    });

    // const [effect, setEffect] = useState('original');
    // const effectOnPress = (effect) => {
    //   setEffect(effect);
    // }

    const ref = firebase.storage().ref().child(`images/${uuidv4()}`);
    const snapshot = await ref.put(blob);

    snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
      setUploading(true);
    },
    (error) => {
      setUploading(false);
      console.log(error);
      blob.close()  
      return
    },
    () => {
      snapshot.snapshot.ref.getDownloadURL().then((url) => {
        setUploading(false);
        console.log("download url: " + url);
        blob.close()
        return url;
    })
  },
  )
}

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="three-bars" size={27} onPress={() => navigation.openDrawer()} />
        <Image source={require('../assets/logo.png')} style={styles.title}/>
        <Text></Text>
      </View>
      <View style={styles.mainImageView}>
        <View style={styles.crossView}>
          <View style={styles.crossGroup}>
            <Entypo name="cross" size={32} color="white" onPress={() => navigation.navigate('StartProject')} style={styles.cross}/>
          </View>
        </View>
        <View style={styles.filterMenu}>
          
          <View style={styles.crossGroup} >
            <Image source={require('../assets/ticon.png')} />
          </View>
          <TouchableOpacity onPress={() => setStickerVisible(!stickerVisible)}>
          <View style={styles.crossGroup} >
            <Image source={require('../assets/sticker.png')} />
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.crossGroup}>
            <Image source={require('../assets/options2.png')} />
          </View>
          </TouchableOpacity>

        </View>
        {modalVisible ? (<View style={styles.optionModal}>
          <TouchableOpacity style={styles.optionFilter}>
            <Text style={styles.optionText}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionFilter} onPress={() => setElementVisible(!elementVisible)}>
            <Text style={styles.optionText}>Effects</Text>
          </TouchableOpacity>
        </View>) : null}
        {imageData && <Image source={{ uri: imageData }} style={styles.mainImage} />}
        <TouchableOpacity onPress={uploadImage}>
          <View style={styles.publishContainer}>
            <Text style={styles.content}>Publish</Text>  
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerLeft}>
          <Text style={styles.textLeft}>Left</Text>
        </View>
        <View style={styles.footerRight}>
          <Text style={styles.textRight}>Right</Text>
        </View>
      </View>
      {elementVisible ? (<View style={styles.filterModal}>
        <View style={styles.filterList}>
          <ScrollView horizontal={true}>
            <View style={styles.filter1}>
              {imageData && <Image source={{ uri: imageData }} style={styles.filterImage}/>}
              <Text style={styles.filterText}>Original</Text>
            </View>
            <View style={styles.filter1}>
              {imageData && <Image source={{ uri: imageData }} style={styles.filterImage}/>}
              <Text style={styles.filterText}>Original</Text>
            </View>
            <View style={styles.filter1}>
              {imageData && <Image source={{ uri: imageData }} style={styles.filterImage}/>}
              <Text style={styles.filterText}>Original</Text>
            </View>
            <View style={styles.filter1}>
              {imageData && <Image source={{ uri: imageData }} style={styles.filterImage}/>}
              <Text style={styles.filterText}>Original</Text>
            </View>
          </ScrollView>
        </View>
      </View>) : null}
      {stickerVisible ? (<View style={styles.stickerMenu}>
        <View style={styles.stickerList}>
          
            
            <View style = {styles.sticker1}>
              <Image source={require('../assets/stickers/brezel.png')} />
            </View>
            <View style = {styles.sticker1}>
              <Image source={require('../assets/stickers/drinks.png')} />
            </View>
            <View style = {styles.sticker1}>
              <Image source={require('../assets/stickers/flash.png')} />
            </View>
            <View style = {styles.sticker1}>
              <Image source={require('../assets/stickers/gift.png')} />
            </View>
            <View style = {styles.sticker1}>
              <Image source={require('../assets/stickers/heart.png')} />
            </View>
            <View style = {styles.sticker1}>
              <Image source={require('../assets/stickers/nut.png')} />
            </View>
            <View style = {styles.sticker1}>
              <Image source={require('../assets/stickers/off.png')} />
            </View>
            <View style = {styles.sticker1}>
              <Image source={require('../assets/stickers/sale.png')} />
            </View>
            <View style = {styles.sticker1}>
              <Image source={require('../assets/stickers/up.png')} />
            </View>
            
          
        </View>
      </View>) : null}
    </View>
  )
}

export default StartProjectRight

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  
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
  mainImageView: {
    display: 'flex',
    margin: 20,
    height: height * 0.7,
    borderRadius: 20,
  },
  mainImage: {
    height: '100%',
    borderRadius: 20,
  },
  crossView: {
    display: 'flex',
    position: 'absolute',
    zIndex: 2,
    padding: 10,
  },
  crossGroup: {
    display: 'flex',
    backgroundColor: 'gray',
    borderRadius: 40,
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  filterMenu: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    zIndex: 2,
    padding: 10,
  },
  publishContainer: {
    display: 'flex',
    position: 'absolute',
    backgroundColor: 'rgba(181, 56, 62, 1)',
    borderRadius: 20,
    right: 0,
    bottom: 0,
    width: 150,
    height: 50,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content : {
    color : 'white',
    fontSize : 18,
  },
  footerContainer: {
    display: 'flex',
    width: width,
    height: height * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLeft: {
    display: 'flex',
    borderColor: 'black',
    borderBottomWidth: 1,
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerRight: {
    display: 'flex',
    // borderColor: 'black',
    // borderBottomWidth: 1,
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLeft: {
    fontSize: 18,
  },
  textRight: {
    fontSize: 18,
    color: 'gray',
  },
  filterModal: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,    
    width: width,
    height: height * 0.25,
    backgroundColor: 'rgba(16, 16, 16, 0.9)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterList: {
    display: 'flex',
    flexDirection: 'row',
    height: height * 0.2,
    width: width,
    alignItems: 'center',
  },
  filter1: {
    display: 'flex',
    flexDirection: 'column',
    height: 130,
    width: 130,
    marginLeft: 10,
    marginRight: 10,
  },
  filterImage: {
    height: 130,
    width: 130,
  },
  filterText: {
    display: 'flex',
    color: 'white', 
    fontSize: 18,  
    position: 'absolute',
    bottom: 0,
    left: '25%',
  },
  optionModal: {
    display: 'flex',
    position: 'absolute',
    backgroundColor: 'gray',
    height: 80,
    width: 90,
    zIndex: 2,
    right: 0,
    margin: 10,
    marginTop: 70,
    borderRadius: 10,
    padding: 10,
  },
  optionFilter: {
    display: 'flex',
    margin: 5,
  },
  optionText: {
    color: 'white',
  },
  stickerMenu: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,    
    width: width,
    height: height * 0.4,
    backgroundColor: 'rgba(16, 16, 16, 0.9)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  stickerList: {
    display: 'flex',
    flexWrap: 'wrap',
    height: height * 0.4,
    width: width,

  },
  sticker1: {
    display: 'flex',
    height: 110,
    width: 110,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center', 
  }
})
