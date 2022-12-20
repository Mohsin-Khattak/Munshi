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
import Bold from '../../typography/bold-text';

type props = NativeStackScreenProps<RootStackParamList, 'ForgetPassword'>;

const ForgetPassword = (props: props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const state = useAppSelector(s => s?.user);

  const [values, setValues] = React.useState({
    email: '',
  });

  return (
    <View style={styles.container}>
      <AppHeader title="Sign-in" />
      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <PrimaryInput
          keyboardType={'email-address'}
          label={'Email'}
          onChangeText={str => setValues({...values, email: str})}
          value={values.email}
          placeholder={'Email'}
        />

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
export default ForgetPassword;
