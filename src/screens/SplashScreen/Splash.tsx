import React, { useEffect, useState } from 'react';
import { Image, ActivityIndicator } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, withRepeat } from 'react-native-reanimated';
import colors from '../../config/colors';
import styles from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';

const Splash = () => {
  const opacity = useSharedValue(0);
  const [loadingText, setLoadingText] = useState('');
  const textOpacity = useSharedValue(1);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Welcome');
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigation]);


  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });

    const fullText = 'Loading..';
    let currentText = '';
    fullText.split('').forEach((char, index) => {
      setTimeout(() => {
        currentText += char;
        setLoadingText(currentText);
      }, 100 * index);
    });

    textOpacity.value = withRepeat(
      withTiming(0.5, {
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, [opacity, textOpacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Image source={require('../../assets/img/splash.png')} style={styles.image} />
      <Animated.Text style={[styles.loadingText, textAnimatedStyle]}>{loadingText}</Animated.Text>
      <ActivityIndicator size="large" color={colors.lightBlue} />
    </Animated.View>
  );
};

export default Splash;