import './firebase';
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import OnBoarding from './screens/OnBoarding';
// import Login from './screens/Login';
// import Register from './screens/Register';
// import SignIn from './screens/SignIn';
// import ForgotPassword from './screens/ForgotPassword';
// import ResetPassword from './screens/ResetPassword';
// import TotalError from './screens/TotalError';
// import HomeScreen from './screens/HomeScreen';
// import StartProject from './screens/StartProject';
// import StartProjectRight from './screens/StartProjectRight';
// import GalleryScreen from './screens/GalleryScreen';


import RootNavigation from './Navigation';



export default function App() {
  
  return <RootNavigation />;
    
}




// const App = () => {

//   const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
  
  
//   React.useEffect(async () => {
//     const appData = await AsyncStorage.getItem('isAppFirstLaunched');
//     if (appData == null) {
//       setIsAppFirstLaunched(true);
//       AsyncStorage.setItem('isAppFirstLaunched', 'false');
//     } else {
//       setIsAppFirstLaunched(false);
//     }

    
//   }, []);
  
//   // const firebaseConfig = {
//   //   apiKey: "AIzaSyCKJDRJA8Qa9m4pPhBE6v0DmxG6ha2iQcc",
//   //   authDomain: "volcanoh-3ca19.firebaseapp.com",
//   //   projectId: "volcanoh-3ca19",
//   //   storageBucket: "volcanoh-3ca19.appspot.com",
//   //   messagingSenderId: "68240448112",
//   //   appId: "1:68240448112:web:0586d185811e4c5bb8b2b5"
//   // };

//   // if (!firebase.apps.length) {
//   //   firebase.initializeApp(firebaseConfig);
//   // } else {
//   //   firebase.app()
//   // }

  
//   // firebase.auth().onAuthStateChanged(user => {
//   //   if (user != null) {
//   //     setIsLoggedIn(true);
//   //   } else {
//   //     setIsLoggedIn(false);
//   //   }
  
//   //   // Do other things
//   // });

//   return (
//     isAppFirstLaunched != null && (
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//           {isAppFirstLaunched && (
//             <Stack.Screen
//               name="OnBoarding"
//               component={OnBoarding}
//             />
//           )}
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Register" component={Register} />
//           <Stack.Screen name="SignIn" component={SignIn} />
//           <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//           <Stack.Screen name="ResetPassword" component={ResetPassword} />
//           <Stack.Screen name="TotalError" component={TotalError} />
//           <Stack.Screen name="HomeScreen" component={HomeScreen} />
//           <Stack.Screen name="StartProject" component={StartProject} />
//           <Stack.Screen name="StartProjectRight" component={StartProjectRight} />
//           <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
//   );
// };

// export default App;

