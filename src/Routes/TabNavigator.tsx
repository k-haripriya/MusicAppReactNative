import React, {Component, useEffect, useRef, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SearchScreen from '../Screens/SearchScreen/SearchScreen';
import LibraryScreen from '../Screens/LibraryScreen/LibraryScreen';
import {
  GestureResponderEvent,
  Image,
  ImageComponent,
  StyleSheet,
  Touchable,
  View,
} from 'react-native';
import {images} from '../res/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../res/AppColors';
import * as Animatable from 'react-native-animatable';
import {RouterConstants} from '../Constants/RouterConstants';

const Tab = createBottomTabNavigator();

const screens = [
  {
    name: RouterConstants.HomeScreen,
    Component: HomeScreen,
    icon: images.homeicon,
  },
  {
    name: RouterConstants.SearchScreen,
    Component: SearchScreen,
    icon: images.searchicon,
  },
  {
    name: RouterConstants.LibraryScreen,
    Component: LibraryScreen,
    icon: images.libraryicon,
  },
];

const TabButton = (props: any) => {
  const {screen, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 1, translateY: 0},
        1: {scale: 1.1, translateY: -3},
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.1, translateY: -3},
        1: {scale: 1, translateY: 0},
      });
    }
  }, [focused]);

  return (
    <Animatable.View ref={viewRef} duration={200}>
      <TouchableOpacity
        style={focused ? [styles.button, styles.activeButton] : styles.button}
        onPress={onPress}>
        <Image source={screen.icon} style={styles.icon} />
      </TouchableOpacity>
    </Animatable.View>
  );
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={RouterConstants.HomeScreen}
      screenOptions={{tabBarStyle: styles.tabBar, headerShown: false}}>
      {screens.map((screen, index) => {
        return (
          <Tab.Screen
            key={index}
            name={screen.name}
            component={screen.Component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} screen={screen} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    left: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.appTheme,
  },
  button: {
    padding: 2,
    paddingVertical: 5,
    marginHorizontal: 35,
  },
  icon: {
    resizeMode: 'contain',
    height: 25,
  },
  activeButton: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    elevation: 5,
  },
});
