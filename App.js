import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: "one",
    title: "Step 1",
    text: "Set up Volcanoh outside your store and pair it with the app.",
    image: require("./assets/illustration1.png"),
  },
  {
    key: "two",
    title: "Step 2",
    text: "Select artworks for front & back screens through the app.",
    image: require("./assets/illustration2.png"),
  },
  {
    key: "three",
    title: "Step 3",
    text: "Publish and enjoy more walkins!",
    image: require("./assets/image9.png"),
  }
]

export default class App extends React.Component {
  state = {showHomePage : false}
  _renderItem = ({item}) => {
    return (
      <View style={{flex:1}}> 
        <Image source={require('./assets/logo.png')} style={{
          alignSelf: 'center',
          width: 125,
          height: 40,
          top: '5%'
        }} />
        <Image 
          source={item.image}
          style={{
            resizeMode:"cover",
            height:513,
            width: 447
          }} />
          <Text
            style={{
              paddingBottom: 10,
              fontSize: 19,
              fontWeight: "bold",
              color: "black",
              alignSelf: "center",
            }}
          >{item.title}</Text>

          <Text style={{
            textAlign: "center",
            color: "rgba(142, 142, 147, 0.8)",
            fontSize: 15,
            paddingHorizontal: 90
          }}>
            {item.text}
          </Text>
      </View>
    )
  }

  render() {
    return (
      <AppIntroSlider 
        renderItem = {this._renderItem}
        data = {slides}
        activeDotStyle={{
          backgroundColor: "#B5383E",
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// import React from 'react';
// import {View,Text} from 'react-native'
// import { NavigationContainer } from 'react-navigation/native'
// import { createNativeStackNavigator } from 'react-navigation/native-stack';
// import {Splash} from './screens/Splash'

// const Stack = createNativeStackNavigator();
// const App = ()=>{
//   return (
//           <NavigationContainer>
//             <Stack.Navigator screenOptions={{headerShown:false}} >
              
//               <Stack.Screen name="Splash" component={Splash} />
              
//             </Stack.Navigator>
//           </NavigationContainer>
//   );
// }

// export default App