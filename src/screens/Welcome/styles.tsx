import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage: {
    width: responsiveWidth(155),
    height: responsiveHeight(80),
    marginBottom: responsiveHeight(5),
    resizeMode: 'stretch',
  },
  buttonImage: {
    width: responsiveWidth(70),
    height: responsiveHeight(15),
    resizeMode: 'stretch',
    marginBottom: responsiveHeight(10),
  },
});

export default styles;