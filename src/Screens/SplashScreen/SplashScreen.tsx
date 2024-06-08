import { View, Image, Text } from 'react-native'
import React, { useEffect } from 'react'
import { images } from '../../res/images'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { RouterConstants } from '../../Constants/RouterConstants'
import { Strings } from '../../res/Strings'

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate(RouterConstants.OnBoardingScreen)
    },4000)
  },[])
  return (
    <View style={styles.container}>
       
      <Image source={images.logo}/>
      <Text style={styles.slogan}>{Strings.appSlogan}</Text>
    </View>
  )
}

export default SplashScreen