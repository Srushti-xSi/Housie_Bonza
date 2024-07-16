import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: responsiveWidth(50),
    height: responsiveHeight(18),
    marginTop: responsiveHeight(8),
    resizeMode: 'stretch',
  },
  title: {
    fontSize: responsiveFontSize(3.5),
    color: colors.lightBlue,
    fontFamily: 'Audiowide-Regular',
  },
  input: {
    width: responsiveWidth(80),
    borderColor: colors.lightBlue,
    borderWidth: 1,
    borderRadius: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(7),
    marginTop: responsiveHeight(3),
    backgroundColor: colors.offWhite,
    paddingVertical: responsiveHeight(1),
    fontFamily: 'PressStart2P-Regular',
    fontSize: responsiveFontSize(1.5),
    color: colors.pink,
  },
  error: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: responsiveWidth(7),
    fontFamily:'VT323-Regular',
  },
  btn:{
    width: responsiveWidth(50),
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderRadius: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(7),
    marginTop: responsiveHeight(3),
    backgroundColor: colors.lightBlue,
    paddingVertical: responsiveHeight(1.6),
  },
  btntxt:{
    fontFamily: 'Audiowide-Regular',
    fontSize: responsiveFontSize(3),
    color: colors.offWhite,
    textAlign: 'center',
  },
  registerText: {
    color: colors.grey,
    marginTop: responsiveHeight(4),
    fontSize: responsiveFontSize(1.3),
    fontFamily: 'PressStart2P-Regular',
  },
  registerTxtBold:{
    color: colors.lightBlue,
    marginTop: responsiveHeight(4),
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'PressStart2P-Regular',
  },
});

export default styles;