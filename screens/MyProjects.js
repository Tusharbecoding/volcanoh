import React from 'react'
import { View, Text, SafeAreaView, Image, Dimensions, StyleSheet, ScrollView, StatusBar } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import DrawerContent from './DrawerContent';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const MyProjects = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="three-bars" size={27} color="black" onPress={() => navigation.openDrawer()}/>
        <Image source={require('../assets/logo.png')} style={styles.title}/>
        <Text></Text>
      </View>
      <ScrollView>
      <View style={styles.gridContainer}>
        <View style={styles.imageRow}>
          
        <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/volcanoh-3ca19.appspot.com/o/images%2Ff9f4821b-e769-42c1-8b5f-5b29b4c1b465?alt=media&token=82db9d74-6d4d-404c-a063-e164c5174289'}} style={styles.image}/>
        <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/volcanoh-3ca19.appspot.com/o/images%2F561377cd-59f1-47c3-a2a7-a79717e7bbba?alt=media&token=00ae5db1-9d54-4a98-b5bd-89345492e69f'}} style={styles.image} />
        <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/volcanoh-3ca19.appspot.com/o/images%2Fb570b267-5a8f-45de-9b99-7643bd8efbec?alt=media&token=5477e80b-4257-49bd-bcf4-59dc21a89358'}} style={styles.image} />
          
        </View>
        <View style={styles.imageRow}>
            <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/volcanoh-3ca19.appspot.com/o/images%2Ff9f4821b-e769-42c1-8b5f-5b29b4c1b465?alt=media&token=82db9d74-6d4d-404c-a063-e164c5174289'}} style={styles.image}/>
            <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/volcanoh-3ca19.appspot.com/o/images%2F561377cd-59f1-47c3-a2a7-a79717e7bbba?alt=media&token=00ae5db1-9d54-4a98-b5bd-89345492e69f'}} style={styles.image} />
            <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/volcanoh-3ca19.appspot.com/o/images%2Fb570b267-5a8f-45de-9b99-7643bd8efbec?alt=media&token=5477e80b-4257-49bd-bcf4-59dc21a89358'}} style={styles.image} />
        </View>
        <View style={styles.imageRow}>
        <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/volcanoh-3ca19.appspot.com/o/images%2Ff9f4821b-e769-42c1-8b5f-5b29b4c1b465?alt=media&token=82db9d74-6d4d-404c-a063-e164c5174289'}} style={styles.image}/>
        <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/volcanoh-3ca19.appspot.com/o/images%2F561377cd-59f1-47c3-a2a7-a79717e7bbba?alt=media&token=00ae5db1-9d54-4a98-b5bd-89345492e69f'}} style={styles.image} />
        <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/volcanoh-3ca19.appspot.com/o/images%2Fd5a8fda0-e520-4fcd-a04a-c1cc290e38c5?alt=media&token=79693b55-c194-4af2-b0b1-01f436b125e3'}} style={styles.image} />
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
  gridContainer: {
    display: 'flex',
    backgroundColor: 'blue',
    height: height,
    width: width,
  },
  imageRow: {
    display: 'flex',
    flexDirection: 'row',
    height: height * 0.3,
    margin: 2,
  },
  image: {
    display: 'flex',
    height: height * 0.3,
    width: 116,
    backgroundColor: 'brown',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
  }
})

export default MyProjects
