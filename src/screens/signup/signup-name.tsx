import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignupBar } from 'components/atoms/signup-bar';
import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { signupFormValidation } from 'validations';
import { PrimaryButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { useAppDispatch } from '../../hooks/use-store';
import { onSignupPress } from '../../services/firebase/firebase-actions';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'SignupName'>;

const SignupName = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const { values, errors, touched, setFieldValue, setFieldTouched, isValid } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validate: signupFormValidation,
      onSubmit: () => { },
    });

  console.log('touched:=>', touched);
  console.log('errors:=>', errors);
  // if (isValid && Object.keys(touched).length > 0) {

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <SignupBar currentIndex={1} />
        <KeyboardAvoidScrollview
          contentContainerStyle={styles.contentContainerStyle}>
          <PrimaryInput
            label={'Full Name'}
            onChangeText={str => setFieldValue('name', str)}
            value={values.name}
            placeholder={'Full Name'}
          />

          <PrimaryButton
            title={'Next'}
            onPress={() => navigation.navigate('SignupEmail')}
            containerStyle={styles.button}
          />
        </KeyboardAvoidScrollview>
      </View>
    </View>
  );
};
export default SignupName;
