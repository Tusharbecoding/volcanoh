import React from 'react';
import { SafeAreaView, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';


const Register = ({navigation}) => {

    const [email, onChangeEmail] = React.useState();
    const [password, onChangePassword] = React.useState();
    const [name, onChangeName] = React.useState();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView 
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={{
                top: windowHeight * 0.095,

            }}
            onPress={() => navigation.navigate('Login')}>
                <Image source={require('../assets/arrow.png')} style={{width: 20, height: 16}} />
            </TouchableOpacity>
            <Image source={require('../assets/logo.png')} style={{
                alignSelf: 'center',
                width: 125,
                height: 40,
                top: '5%'
              }} />
            <Image source={require('../assets/image12.png')} style={{resizeMode: 'contain', bottom: '8%', height: 500, left: '7%'}}/>
            <Text
                style={{fontWeight: '600', bottom: '25%', fontSize: 24, color: "rgba(16, 16, 16, 1)", }}>Sign Up</Text>
            
            <TextInput
                style={{
                    height: 45,
                    bottom: '23%',
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: 'rgba(214, 214, 214, 0.6)',
                    
                }}
                placeholderTextColor={'rgba(16, 16, 16, 0.8)'}
                placeholder="Full name"
                onChangeText={onChangeName}
                value={name}
                
              />
            <TextInput
                style={{
                    height: 45,
                    bottom: '22%',
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
                    bottom: '21%',
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
            
            <TouchableOpacity style={{width: "80%",
                    borderRadius: 20,
                    width: 355,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: windowHeight * 0.19,
                    backgroundColor: "rgba(181, 56, 62, 1)",}}
                    onPress={() => navigation.navigate('Register')}>
                <Text style={{color:'white', fontWeight: '600', fontSize: 13}}>Create account</Text>

            </TouchableOpacity>
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: windowHeight * 0.17,
            }}>
                <Text>You have account?</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}>
                    <Text
                    style={{
                        color: 'rgba(181, 56, 62, 1)',
                    }}> Sign in</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </SafeAreaView>
    );
};

export default Register;