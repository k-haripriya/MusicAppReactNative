import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { images } from '../../res/images'
import { useNavigation } from '@react-navigation/native'
import { RouterConstants } from '../../Constants/RouterConstants'

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSettings = () =>{
    navigation.navigate(RouterConstants.SettingsScreen);
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
      <View style={styles.headerChild}>
      <Image source={images.profile}/>
      <Text style={styles.welcomeText}>Good Morning</Text>
      </View>
      <TouchableOpacity hitSlop={{right:5,left:5}} onPress={()=>handleSettings()}>
      <Image source={images.settings}/>
      </TouchableOpacity>
      </View>

    </View>
  )
}

export default HomeScreen