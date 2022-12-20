import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Row} from 'components/atoms/row';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {PrimaryButton} from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import styles from './styles';
import Bold from './../../typography/bold-text';
import {SignupBar} from 'components/atoms/signup-bar';
import Regular from './../../typography/regular-text';
import {colors} from './../../config/colors';
import Feather from 'react-native-vector-icons/Feather';

type props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = (props: props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const state = useAppSelector(s => s?.user);
  const [rememberMe, setRememberMe] = React.useState(false);

  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <PrimaryInput
          keyboardType={'email-address'}
          label={'Email'}
          onChangeText={str => setValues({...values, email: str})}
          value={values.email}
          placeholder={'Email'}
        />
        <PrimaryInput
          secureTextEntry
          placeholder={'********'}
          label={'Password'}
          onChangeText={str => setValues({...values, password: str})}
          value={values.password}
        />
        <Row>
          <Row style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              style={styles.remindMeBtn}>
              {rememberMe && (
                <Feather size={16} color={colors.black} name={'check'} />
              )}
            </TouchableOpacity>
            <Regular style={styles.rememberText} label={'Remember me'} />
          </Row>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Regular label={'Forgot password?'} style={styles.forgotText} />
          </TouchableOpacity>
        </Row>
        <PrimaryButton
          title={'Login'}
          onPress={() => {}}
          containerStyle={styles.button}
        />
        <Row style={styles.accountText}>
          <Medium label={'Register an account?'} />
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate('SignupName')}>
            <Bold label={'Sign Up'} />
          </TouchableOpacity>
        </Row>
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default Login;
