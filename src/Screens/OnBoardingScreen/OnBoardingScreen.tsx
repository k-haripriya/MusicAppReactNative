import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useState} from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import {Strings} from '../../res/Strings';
import {images} from '../../res/images';
import {onboardingConstants} from '../../Types/OtherTypes';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { RouterConstants } from '../../Constants/RouterConstants';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const [getActiveScreen, setActiveScreen] = useState(1);
  const data: {[key: string]: onboardingConstants} = {
    screen1: {
      des: Strings.onboarding.screen1,
      image: images.ob1,
    },
    screen2: {
      des: Strings.onboarding.screen2,
      image: images.ob2,
    },
    screen3: {
      des: Strings.onboarding.screen3,
      image: images.ob3,
    },
  };
  const handleSwipe = (swipe: string) => {
    switch (swipe) {
      case 'left':
        if (getActiveScreen < 3) {
          setActiveScreen(getActiveScreen + 1);
        } else {
          setActiveScreen(1);
        }
        break;
      case 'right':
        if (getActiveScreen > 1) {
          setActiveScreen(getActiveScreen - 1);
        } else {
          setActiveScreen(3);
        }
        break;
    }
  };
  const handleSkip = () => {
    navigation.navigate(RouterConstants.LandingScreen);
  };
  return (
    <GestureRecognizer
      onSwipeLeft={() => handleSwipe('left')}
      onSwipeRight={() => handleSwipe('right')}>
      <ImageBackground
        source={data[`screen${getActiveScreen}`].image}
        style={styles.image}>
        <View style={styles.continer}>
          <Text style={styles.appName}>{Strings.appName}</Text>
          <View>
            <Text style={styles.des}>
              {data[`screen${getActiveScreen}`].des}
            </Text>
            <View style={styles.boxView}>
              {Array.from({length: 3}).map((item, index) => {
                return (
                  <View
                    key={index}
                    style={
                      getActiveScreen === index + 1
                        ? [styles.box, styles.activeBox]
                        : styles.box
                    }></View>
                );
              })}
            </View>
            <TouchableOpacity
              style={styles.SkipButton}
              onPress={() => handleSkip()}>
              <Image source={images.close} style={styles.closeButton} />
              <Text style={styles.skipText}>SKIP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </GestureRecognizer>
  );
};

export default OnBoardingScreen;
