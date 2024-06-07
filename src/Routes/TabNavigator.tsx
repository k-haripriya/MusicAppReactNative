import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SearchScreen from '../Screens/SearchScreen/SearchScreen';
import LibraryScreen from '../Screens/LibraryScreen/LibraryScreen';

const Tab = createBottomTabNavigator();

 export const TabNavigator = () =>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Library" component={LibraryScreen} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}