import { StyleSheet } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  backButton: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    margin: responsiveHeight(2),
  },
  logoutButton: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    margin: responsiveHeight(2),
  },
  userInfo: {
    alignSelf: 'center',
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: responsiveWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  img: {
    width:responsiveWidth(22),
    height: responsiveHeight(22),
    resizeMode: 'contain',
  },
  textOverlay: {
    position: 'absolute',
    top: responsiveHeight(8),
    left: responsiveWidth(20.5),
    transform: [{ translateX: -50}, { translateY: -50}],
    textAlign: 'center',
    zIndex: 10,
    color: colors.red,
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
    fontFamily: 'PressStart2P-Regular',
  },
  userContainer:{
    alignSelf: 'center',
    width: responsiveWidth(60),
    height: responsiveHeight(10),
    borderRadius: responsiveWidth(3),
    marginTop: responsiveHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  userImg: {
    resizeMode: 'stretch',
  },
  userTxt: {
    width: responsiveWidth(40),
    position: 'absolute',
    top: responsiveHeight(9.2),
    left: responsiveWidth(25),
    transform: [{ translateX: -50}, { translateY: -50}],
    textAlign: 'center',
    zIndex: 10,
    color: colors.offWhite,
    fontSize: responsiveFontSize(3.5),
    fontWeight: 'bold',
    fontFamily: 'PressStart2P-Regular',
  },

  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  hostButton: {
    width: responsiveWidth(70),
    height: responsiveHeight(17),
    padding: responsiveHeight(2),
    borderRadius: responsiveWidth(2.5),
    alignItems: 'center',
    marginTop: responsiveHeight(15),
  },
  inviteButton: {
    width: responsiveWidth(70),
    height: responsiveHeight(17),
    padding: responsiveHeight(2),
    borderRadius: responsiveWidth(2.5),
    alignItems: 'center',
  },
  buttonText: {
    color: colors.offWhite,
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    fontFamily: 'Jersey15-Regular',
  },
  buttonImageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(2.5),
    resizeMode:'repeat',
},
inviteContainer: {
  alignItems: 'center',
},
inviteInput: {
    width: responsiveWidth(80),
    borderColor: colors.purple,
    borderWidth: 2,
    borderRadius: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(7),
    backgroundColor: colors.offWhite,
    paddingVertical: responsiveHeight(1),
    fontFamily: 'PressStart2P-Regular',
    fontSize: responsiveFontSize(1.5),
    color: colors.purple,
},
error: {
  color: 'red',
  alignSelf: 'flex-start',
  marginLeft: responsiveWidth(10),
  fontFamily:'VT323-Regular',
},
});

export default styles;
