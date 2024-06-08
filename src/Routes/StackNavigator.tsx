import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationStackParams } from '../Types/RoutesTypes'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import { RouterConstants } from '../Constants/RouterConstants';
import LandingScreen from '../Screens/LandingScreen/LandingScreen';
import OnBoardingScreen from '../Screens/OnBoardingScreen/OnBoardingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';

const Stack = createStackNavigator<NavigationStackParams>();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouterConstants.SplashScreen}>
        <Stack.Screen name={RouterConstants.SplashScreen} component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name={RouterConstants.OnBoardingScreen} component={OnBoardingScreen} options={{headerShown:false}}/>
        <Stack.Screen name={RouterConstants.LandingScreen} component={LandingScreen} options={{headerShown:false}}/>
        <Stack.Screen name={RouterConstants.ProfileScreen} component={ProfileScreen} options={{headerShown:true,title:'My Profile'}}/>
        <Stack.Screen name={RouterConstants.SettingsScreen} component={SettingsScreen} options={{headerShown:true,title:'Settings'}}/>


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator