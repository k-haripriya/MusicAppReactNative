import { View, Image } from 'react-native'
import React from 'react'
import { images } from '../../res/images/images'
import { styles } from './styles'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
       
      <Image source={images.logo}/>
    </View>
  )
}

export default SplashScreen