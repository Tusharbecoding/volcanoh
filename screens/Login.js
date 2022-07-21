
import { SafeAreaView, Text, View, Image, Button, TouchableOpacity, Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './Register';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import TotalError from './TotalError';
import HomeScreen from './HomeScreen';
import StartProject from './StartProject';
import StartProjectRight from './StartProjectRight';
import GalleryScreen from './GalleryScreen';
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

WebBrowser.maybeCompleteAuthSession();

const Login = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '68240448112-lr4ovq00kfe11o0fcjsrn41h05vd477s.apps.googleusercontent.com',
    },
    {
      behavior: 'web',
    }
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);
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
            style={{bottom: windowHeight * 0.13}}
            disabled={!request}
            onPress={() => {
              promptAsync();
              }}
              >
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