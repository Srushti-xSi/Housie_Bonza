import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: responsiveWidth(90),
    height: responsiveHeight(60),
    resizeMode: 'stretch',
    marginBottom: responsiveHeight(20),
  },
  loadingText: {
    color: colors.offWhite,
    fontSize: responsiveFontSize(3),
    marginBottom: responsiveHeight(5),
    fontFamily: 'PressStart2P-Regular',
  },
});

export default styles;
