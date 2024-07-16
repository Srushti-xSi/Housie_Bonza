import React from 'react';
import { View, Text, TouchableOpacity, Image, BackHandler, StatusBar, ImageBackground } from 'react-native';
import { useNavigation, NavigationProp, useFocusEffect } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { RootStackParamList } from '../../navigation/types';
import styles from './styles';
import colors from '../../config/colors';
//import { UserContext, UserContextProps } from '../../context/UserContext';

const RoomCode = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
 // const { username } = useContext(UserContext) as UserContextProps;

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [])
  );

  const handleLogout = () => {
    auth().signOut().then(() => {
      navigation.navigate('Register');
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/img/background.jpeg')}
      style={styles.backgroundImage}
    >
      <StatusBar backgroundColor={colors.darkBlue} />
      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Image source={require('../../assets/img/back.jpeg')} style={styles.backButton} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout}>
            <Image source={require('../../assets/img/logout.png')} style={styles.logoutButton} />
        </TouchableOpacity>
      </View>

      <View style={styles.userInfo}>
        <Image source={require('../../assets/img/userletter.png')} style={styles.img} />
        <Text style={styles.textOverlay}>B</Text>
      </View>

      <View style={styles.userContainer}>
        <Image source={require('../../assets/img/pink.png')} style={styles.userImg} />
        <Text style={styles.userTxt}>Bonza</Text>
      </View>

      <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.hostButton}>
                <ImageBackground
                    source={require('../../assets/img/red.png')}
                    style={styles.buttonImageBackground}
                >
                    <Text style={styles.buttonText}>Host a game</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inviteButton}>
                <ImageBackground
                    source={require('../../assets/img/yellow.png')}
                    style={styles.buttonImageBackground}
                >
                    <Text style={styles.buttonText}>I've an Invite Code</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>

    </ImageBackground>
  );
};

export default RoomCode;
