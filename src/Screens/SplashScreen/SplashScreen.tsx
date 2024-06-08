import { View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { images } from '../../res/images/images'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { RouterConstants } from '../../Constants/RouterConstants'

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
    },4000)
  },[])
  return (
    <View style={styles.container}>
       
      <Image source={images.logo}/>
    </View>
  )
}

export default SplashScreen