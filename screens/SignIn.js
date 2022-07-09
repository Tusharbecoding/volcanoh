import React from 'react';
import { SafeAreaView, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, Dimentions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';


const SignIn = ({navigation}) => {

    const [email, onChangeEmail] = React.useState();
    const [password, onChangePassword] = React.useState();

    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView 
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}>
            <Image source={require('../assets/logo.png')} style={{
                alignSelf: 'center',
                width: 125,
                height: 40,
                top: '5%'
              }} />
            <Image source={require('../assets/image13.png')} style={{resizeMode: 'contain', bottom: '8%', height: 500, left: '15%'}}/>
            <Text
                style={{fontWeight: '600', bottom: '22%', fontSize: 24, color: "rgba(16, 16, 16, 1)", }}>Sign In</Text>
            
            
                <TextInput
                style={{
                    height: 45,
                    bottom: '20%',
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: 'rgba(214, 214, 214, 0.6)',
                    
                }}
                placeholderTextColor={'rgba(16, 16, 16, 0.8)'}
                placeholder="Email address"
                onChangeText={onChangeEmail}
                value={email}
                
              />
              <TextInput
                style={{
                    height: 45,
                    bottom: '18.5%',
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: 'rgba(214, 214, 214, 0.6)',
                    
                }}
                placeholderTextColor={'rgba(16, 16, 16, 0.8)'}
                placeholder="Password"
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true} 
              />
            <TouchableOpacity
            style={{
                left: '59%',
                bottom: '17%',
            }}
            onPress={() => navigation.navigate('ForgotPassword')}
            >
            <Text
            style={{
                fontWeight: 'bold',
            }}
            >Forgot your password?</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={{width: "80%",
                    borderRadius: 20,
                    width: 355,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: '12%',
                    backgroundColor: "rgba(181, 56, 62, 1)",}}
                    >
                <Text style={{color:'white', fontWeight: '600', fontSize: 13}}>Sign in</Text>

            </TouchableOpacity>
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: '20%',
            }}>
                <Text>Don't have account?</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('Register')}>
                    <Text
                    style={{
                        color: 'rgba(181, 56, 62, 1)',
                    }}> Sign up</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </SafeAreaView>
    );
};

export default SignIn;