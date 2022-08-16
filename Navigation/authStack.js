import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import TotalError from '../screens/TotalError';
import Login from '../screens/Login';
import OnBoarding from '../screens/OnBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function AuthStack() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
  React.useEffect(async () => {
       const appData = await AsyncStorage.getItem('isAppFirstLaunched');
       if (appData == null) {
         setIsAppFirstLaunched(true);
         AsyncStorage.setItem('isAppFirstLaunched', 'false');
       } else {
         setIsAppFirstLaunched(false);
       }
    
        
     }, []);
    return (
      isAppFirstLaunched != null && (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAppFirstLaunched && (
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
          />
        )}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="TotalError" component={TotalError} />
        </Stack.Navigator>
      </NavigationContainer>)
    );
  }