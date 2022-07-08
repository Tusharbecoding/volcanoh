import React from 'react';
import { SafeAreaView, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, Dimentions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';


const SignIn = ({navigation}) => {

    const [text, onChangeText] = React.useState();
  
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
            <View>
            <Icon  name="eye" size={20} color="#000"/>
                <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    
                }}
                placeholder="useless placeholder"
                onChangeText={onChangeText}
                value={text}
                secureTextEntry={true}
              />
              </View>

            <TouchableOpacity style={{width: "80%",
                    borderRadius: 20,
                    width: 355,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: '19%',
                    backgroundColor: "rgba(181, 56, 62, 1)",}}
                    onPress={() => navigation.navigate('Register')}>
                <Text style={{color:'white', fontWeight: '600', fontSize: 13}}>Sign up free</Text>

            </TouchableOpacity>
            </ScrollView>
            </SafeAreaView>
    );
};

export default SignIn;