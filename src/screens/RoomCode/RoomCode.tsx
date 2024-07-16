import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, BackHandler, StatusBar, ImageBackground, TextInput } from 'react-native';
import { useNavigation, NavigationProp, useFocusEffect } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { RootStackParamList } from '../../navigation/types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import colors from '../../config/colors';
import Alert from '../../components/Alert/Alert';

const RoomCode = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [showInviteInput, setShowInviteInput] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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

  const generateRoomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const handleHostGame = async () => {
    const roomCode = generateRoomCode();
    await firestore().collection('rooms').doc(roomCode).set({
      host: auth().currentUser?.uid,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    setShowInviteInput(false);
    navigation.navigate('Play', { roomCode });
  };

  const handleJoinGame = async (values: { inviteCode: string }) => {
    const roomRef = await firestore().collection('rooms').doc(values.inviteCode).get();
    if (roomRef.exists) {
      navigation.navigate('Play', { roomCode: values.inviteCode });
    } else {
      setShowAlert(true);
    }
  };

  const validationSchema = Yup.object().shape({
    inviteCode: Yup.string().required('Invite code is required'),
  });

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
        <TouchableOpacity style={styles.hostButton} onPress={handleHostGame}>
          <ImageBackground
            source={require('../../assets/img/red.png')}
            style={styles.buttonImageBackground}
          >
            <Text style={styles.buttonText}>Host a game</Text>
          </ImageBackground>
        </TouchableOpacity>

        {showInviteInput ? (
          <Formik
            initialValues={{ inviteCode: '' }}
            validationSchema={validationSchema}
            onSubmit={handleJoinGame}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View style={styles.inviteContainer}>
                <TextInput
                  style={styles.inviteInput}
                  placeholder="Enter Invite Code"
                  placeholderTextColor={colors.lightGrey}
                  onChangeText={handleChange('inviteCode')}
                  onBlur={handleBlur('inviteCode')}
                  value={values.inviteCode}
                />
                {touched.inviteCode && errors.inviteCode && (
                  <Text style={styles.error}>{errors.inviteCode}</Text>
                )}

                <TouchableOpacity style={styles.inviteButton} onPress={() => handleSubmit()}>
                  <ImageBackground
                    source={require('../../assets/img/purple.png')}
                    style={styles.buttonImageBackground}
                  >
                    <Text style={styles.buttonText}>Join Game</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        ) : (
          <TouchableOpacity style={styles.inviteButton} onPress={() => setShowInviteInput(true)}>
            <ImageBackground
              source={require('../../assets/img/yellow.png')}
              style={styles.buttonImageBackground}
            >
              <Text style={styles.buttonText}>I've an Invite Code</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
      </View>

      <Alert visible={showAlert} onClose={() => setShowAlert(false)} />
    </ImageBackground>
  );
};

export default RoomCode;
