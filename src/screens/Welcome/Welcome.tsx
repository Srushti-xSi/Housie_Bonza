import React from 'react';
import { View, Image, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation, NavigationProp, useFocusEffect } from '@react-navigation/native';
import styles from './styles';

const Welcome = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const scale = useSharedValue(1);

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({ headerShown: false });

      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        navigation.setOptions({ headerShown: true });
      };
    }, [navigation])
  );

  const handlePress = () => {
    scale.value = withTiming(1.2, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    }, (isFinished) => {
      'worklet';
      if (isFinished) {
        scale.value = withTiming(1, {
          duration: 100,
          easing: Easing.inOut(Easing.ease),
        }, (innerIsFinished) => {
          'worklet';
          if (innerIsFinished) {
            runOnJS(navigation.navigate)({ name: 'Login', params: undefined });
          }
        });
      }
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
