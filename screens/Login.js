import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';



const Login = () => {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/logo.png')} style={{
                alignSelf: 'center',
                width: 125,
                height: 40,
                bottom: '2%'
              }} />
            <Image source={require('../assets/image11.png')} style={{resizeMode: 'cover', bottom: '20%', height: '80%'}}/>
        </SafeAreaView>
    );
};

export default Login;