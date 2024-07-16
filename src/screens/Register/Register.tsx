import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, ImageBackground } from 'react-native';
import { Formik, FormikErrors } from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import colors from '../../config/colors';
import { UserContext } from '../../context/UserContext';

interface FormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    general?: string;
}

const Register = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const userContext = useContext(UserContext);
  const setUsername = userContext?.setUsername;

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(8, 'Username must be at least 8 characters long')
      .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers')
      .required('Username is required'),
    email: yup
      .string()
      .email('Invalid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleRegister = (values: FormValues, { setSubmitting, setErrors }: { setSubmitting: (isSubmitting: boolean) => void; setErrors: (errors: FormikErrors<FormValues>) => void }) => {
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        setErrors({ general: 'Registration successful!' });
        if (setUsername) {
            setUsername(values.username);
          }
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error('Registration error:', error);
        setErrors({ general: 'Registration failed: ' + error.message });
        setSubmitting(false);
      });
  };

  return (
    <View style={styles.background}>
        <StatusBar backgroundColor={colors.red}/>
        <ImageBackground
            source={require('../../assets/img/back_screen.jpg')}
            style={styles.backgroundImage}
        />
    <View style={styles.container}>
      <Image source={require('../../assets/img/Housie_text.png')} style={styles.logo} />
      <Text style={styles.title}>Create Your Account</Text>
      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor={colors.lightGrey}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {touched.username && errors.username ? <Text style={styles.error}>{errors.username}</Text> : null}
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
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={colors.lightGrey}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
            />
            {touched.confirmPassword && errors.confirmPassword ? <Text style={styles.error}>{errors.confirmPassword}</Text> : null}
            {errors.general ? <Text style={styles.error}>{errors.general}</Text> : null}

            <TouchableOpacity onPress={() => handleSubmit()} disabled={isSubmitting} style={styles.btn}>
                <Text style={styles.btntxt}>Register</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.registerText}>Already have an account?</Text>
            <Text style={styles.registerTxtBold}>Login</Text>
        </View>
      </TouchableOpacity>

        </View>
    </View>
  );
};

export default Register;
