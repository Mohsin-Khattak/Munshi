import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {PrimaryButton} from '../../components/atoms/buttons';
import PrimaryInput from '../../components/atoms/inputs';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';

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
          title={'Reset Password'}
          onPress={() => {}}
          containerStyle={styles.button}
        />
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default ForgetPassword;
