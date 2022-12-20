import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {signupFormValidation} from 'validations';
import {PrimaryButton} from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import {useAppDispatch} from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import {Row} from './../../components/atoms/row/index';
import Bold from './../../typography/bold-text';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'SignupPassword'>;

const SignupPassword = (props: props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const initialValues = {
    password: '',
    re_password: '',
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
          secureTextEntry={true}
          placeholder={'Password'}
          label={'Password'}
          onChangeText={str => setFieldValue('password', str)}
          onBlur={() => setFieldTouched('password', true)}
          value={values.password}
          isPassword
        />
        <PrimaryInput
          secureTextEntry={true}
          placeholder={'Re-enter password'}
          label={'Password'}
          onChangeText={str => setFieldValue('re_password', str)}
          onBlur={() => setFieldTouched('re_password', true)}
          value={values.re_password}
          isPassword
        />
        <PrimaryButton
          title={'Signup'}
          onPress={() => navigation.navigate('Home')}
          containerStyle={styles.button}
        />
        <Row style={styles.accountText}>
          <Medium label={'Register an account?'} />
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate('SignupName')}>
            <Bold label={'Log In'} />
          </TouchableOpacity>
        </Row>
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default SignupPassword;
