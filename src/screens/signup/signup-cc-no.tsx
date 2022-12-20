import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {signupFormValidation} from 'validations';
import {PrimaryButton} from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import {useAppDispatch} from '../../hooks/use-store';
import {onSignupPress} from '../../services/firebase/firebase-actions';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'SignupCcNo'>;

const SignupCcNo = (props: props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validate: signupFormValidation,
      onSubmit: () => {},
    });

  console.log('touched:=>', touched);
  console.log('errors:=>', errors);
  // if (isValid && Object.keys(touched).length > 0) {

  return (
    <View style={styles.container}>
      <AppHeader back title="Sign-up" />
      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <PrimaryInput
          label={'Full Name'}
          onChangeText={str => setFieldValue('name', str)}
          value={values.name}
          placeholder={'Cc Number'}
        />

        <PrimaryButton
          title={'Next'}
          onPress={() => navigation.navigate('SignupNoEmployees')}
          containerStyle={styles.button}
        />
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default SignupCcNo;
