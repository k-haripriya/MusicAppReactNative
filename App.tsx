import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Routes from './src/Routes'
import { Colors } from './src/res/AppColors'


const App = () => {
  return (
    <>
    <StatusBar backgroundColor={Colors.black} barStyle={'light-content'}/>
    <Routes/>
    </>
  )
}

export default App