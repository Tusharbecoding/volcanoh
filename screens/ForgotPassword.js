import React from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { SafeAreaView, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const auth = getAuth();

const forgotPassword = (Email) => {

    console.log("reset email sent to " + Email);
    sendPasswordResetEmail(auth, Email, null)
        .then(() => {
            alert("reset email sent to " + Email);
        })
        .catch(function (e) {
            console.log(e);
        });
};

const ForgotPassword = ({navigation}, Email) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [email, onChangeEmail] = React.useState();
    const forgotPassword = (Email) => {

        console.log("reset email sent to " + Email);
        sendPasswordResetEmail(auth, Email, null)
            .then(() => {
                alert("reset email sent to " + Email);
            })
            .catch(function (e) {
                console.log(e);
            });
    };

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
                top: windowHeight * 0.1,
              }} />
            <Image source={require('../assets/image12.png')} style={{resizeMode: 'contain', bottom: windowHeight * 0.09, height: windowHeight * 0.75, left: windowWidth * 0.08}}/>
            <Text
                style={{fontWeight: '600', bottom: windowHeight * 0.3, fontSize: 24, color: "rgba(16, 16, 16, 1)", }}>Forgot Password</Text>
            <Text
            style={{
                bottom: windowHeight * 0.27,
                fontSize: 15,
                lineHeight: 24,
                color: "rgba(16, 16, 16, 0.8)",
                
                width: windowWidth * 0.955,
            }}>Enter your emal which you used to register.
            We’ll send you an email with your username and a link to reset your password.</Text>    
            
            
                <TextInput
                style={{
                    height: 45,
                    bottom: windowHeight * 0.23,
                    
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: 'rgba(214, 214, 214, 0.6)',
                    
                }}
                placeholderTextColor={'rgba(16, 16, 16, 0.8)'}
                placeholder="Email address"
                onChangeText={onChangeEmail}
                value={email}
                
              />
              
            
            <TouchableOpacity style={{width: "80%",
                    borderRadius: 20,
                    width: windowWidth * 0.955,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: windowHeight * 0.19,
                    backgroundColor: "rgba(181, 56, 62, 1)",}}
                    onPress={forgotPassword(email)}
                    >
                <Text style={{color:'white', fontWeight: '600', fontSize: 13}}>Send email</Text>

            </TouchableOpacity>
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: windowHeight * 0.17,
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

export default ForgotPassword;