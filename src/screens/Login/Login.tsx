import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, StatusBar } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation, NavigationProp, RouteProp } from '@react-navigation/native';
import colors from '../../config/colors';

interface LoginFormValues {
  email: string;
  password: string;
  general?: string;
}

type LoginRouteProp = RouteProp<RootStackParamList, 'Login'>;

const Login = ({ route }: { route: LoginRouteProp }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { username } = route.params || {}; // Get username from route params
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = (values: LoginFormValues, { setSubmitting, setErrors }: any) => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        setErrors({ general: 'SignIn successfully!' });
        navigation.navigate('RoomCode', { username });
      })
      .catch(() => {
        setErrors({ general: 'Invalid email or password' });
        setSubmitting(false);
      });
  };

  const handleGuestLogin = () => {
    navigation.navigate('RoomCode', { username: 'Bonza01' });
  };

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={colors.red} />
      <ImageBackground
        source={require('../../assets/img/back_screen.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.container}>
        <Image source={require('../../assets/img/Housie_text.png')} style={styles.logo} />
        <Text style={styles.title}>Login and play!</Text>
        <Formik
          initialValues={{ email: '', password: '' } as LoginFormValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={colors.lightGrey}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={colors.lightGrey}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {touched.password && errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
              {errors.general ? <Text style={styles.error}>{errors.general}</Text> : null}
              <TouchableOpacity onPress={() => handleSubmit()} style={styles.btn} disabled={isSubmitting}>
                <Text style={styles.btntxt}>Login</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <Text style={styles.registerTxtBold}>-------------OR--------------</Text>
        <TouchableOpacity onPress={handleGuestLogin} style={styles.btnGuest}>
        <Text style={styles.btntxt}>Play as Guest</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <View style={styles.bottomtxt}>
            <Text style={styles.registerText}>Don't have an account?</Text>
            <Text style={styles.registerTxtBold}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;