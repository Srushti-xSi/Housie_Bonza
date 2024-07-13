import React from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
// import { RootStackParamList } from '../../navigation/types';
import styles from './styles';

const Welcome = () => {
  // const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const scale = useSharedValue(1);

  const handlePress = () => {
    scale.value = withTiming(1.2, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    }, () => {
      scale.value = withTiming(1, {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
      }, () => {
        // navigation.navigate('NextScreen');
      });
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <>
      <ImageBackground source={require('../../assets/img/background.jpeg')} style={styles.background}>
        <View style={styles.container}>
          <Image source={require('../../assets/img/welBonza.png')} style={styles.topImage} />
          <TouchableOpacity onPress={handlePress}>
            <Animated.Image source={require('../../assets/img/Letsgo.png')} style={[styles.buttonImage, animatedStyle]} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

export default Welcome;