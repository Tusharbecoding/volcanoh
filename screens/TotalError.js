import React from 'react';
import { SafeAreaView, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';


const TotalError = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [email, onChangeEmail] = React.useState();
    

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
            <Image source={require('../assets/image12.png')} style={{resizeMode: 'cover',bottom: '6%', height: windowHeight * 0.8, left: '7%'}}/>
            <Text
                style={{fontWeight: '600', bottom: '20%', fontSize: 24, color: "rgba(16, 16, 16, 1)", }}>Something went wrong</Text>
            <Text
            style={{
                bottom: '18%',
                fontSize: 15,
                lineHeight: 24,
                color: "rgba(16, 16, 16, 0.8)",
                width: windowWidth * 0.9,
            }}>We're sorry</Text>    
            
            <TouchableOpacity style={{width: "80%",
                    borderRadius: 20,
                    width: windowWidth * 0.9,
                    height: windowWidth * 0.13,
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: '13%',
                    backgroundColor: "rgba(181, 56, 62, 1)",}}
                    >
                <Text style={{color:'white', fontWeight: '600', fontSize: 15}}>Reset password</Text>

            </TouchableOpacity>
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: '21%',
            }}>
                <Text>Do you need help?</Text>
                <TouchableOpacity
                >
                    <Text
                    style={{
                        color: 'rgba(181, 56, 62, 1)',
                    }}> Contact support</Text>
                </TouchableOpacity>
            </View>
            
            </ScrollView>
            </SafeAreaView>
    );
};

export default TotalError;