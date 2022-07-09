import React from 'react';
import { SafeAreaView, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, Dimentions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';


const ForgotPassword = ({navigation}) => {

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
            <Image source={require('../assets/image12.png')} style={{resizeMode: 'contain', bottom: '8%', height: 500, left: '7%'}}/>
            <Text
                style={{fontWeight: '600', bottom: '25%', fontSize: 24, color: "rgba(16, 16, 16, 1)", }}>Forgot Password</Text>
            <Text
            style={{
                bottom: '22%',
                fontSize: 15,
                lineHeight: 24,
                color: "rgba(16, 16, 16, 0.8)",
            }}>Enter your emal which you used to registrate.
            We’ll send you an email with your username and a link to reset your password.</Text>    
            
            
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
              
            
            <TouchableOpacity style={{width: "80%",
                    borderRadius: 20,
                    width: 380,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: '15%',
                    backgroundColor: "rgba(181, 56, 62, 1)",}}
                    onPress={() => navigation.navigate('ResetPassword')}
                    >
                <Text style={{color:'white', fontWeight: '600', fontSize: 13}}>Send email</Text>

            </TouchableOpacity>
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: '25%',
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