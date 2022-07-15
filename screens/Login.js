import React from 'react';
import { SafeAreaView, Text, View, Image, Button, TouchableOpacity, Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Login = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/logo.png')} style={{
                alignSelf: 'center',
                width: 125,
                height: 40,
                top: windowHeight * 0.12,
              }} />
            <Image source={require('../assets/image11.png')} style={{resizeMode: 'cover', bottom: windowHeight * 0.01, height: 500}}/>
            <Text
                style={{fontWeight: '600', bottom: windowHeight * 0.17, fontSize: 19, color: "rgba(16, 16, 16, 1)"}}>Welcome to Volcanoh</Text>
            <Text
              style={{bottom: windowHeight * 0.17, textAlign: 'center', paddingHorizontal: 100, lineHeight: 25, fontSize: 15, color: 'rgba(142, 142, 147, 0.8)'}}
            >The fastest way to boost your walk-ins</Text>
            <TouchableOpacity style={{width: "80%",
                    borderRadius: 20,
                    width: 355,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: windowHeight * 0.15,
                    backgroundColor: "rgba(181, 56, 62, 1)",}}
                    onPress={() => navigation.navigate('Register')}>
                <Text style={{color:'white', fontWeight: '600', fontSize: 13}}>Sign up free</Text>

            </TouchableOpacity>
            <TouchableOpacity
            style={{bottom: windowHeight * 0.13}}>
              <Image source={require('../assets/ButtonGoogle.png')} style={{
                
                
              }}></Image>
            </TouchableOpacity>
            <TouchableOpacity
            style={{bottom: windowHeight * 0.12}}>
              <Image source={require('../assets/ButtonApple.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}>
              <Text
              style={{
                bottom: windowHeight * 0.1,
              }}>Sign In</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Login;