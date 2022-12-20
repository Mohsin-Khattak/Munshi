import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

type props = {
  onChangeText: (text: string) => void;
  value: string;
  label: string;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean | undefined;
  isPassword?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
};
const PrimaryInput = (props: props) => {
  const [secure, setSecure] = useState(true);

  const {
    onChangeText,
    value,
    style,
    label,
    placeholder = 'type here',
    labelStyle,
    containerStyle,
    secureTextEntry,
    isPassword,
    keyboardType,
    onBlur,
  } = props;
  return (
    <View style={[styles.Container, containerStyle]}>
      {/* <Regular style={[styles.labelStyle, labelStyle]} label={label} /> */}

      <TextInput
        onBlur={onBlur}
        keyboardType={keyboardType}
        secureTextEntry={isPassword && secure}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[styles.textInput, style]}
      />
      {isPassword && (
        <TouchableOpacity
          style={styles.PasswordIcon}
          onPress={() => setSecure(!secure)}>
          <Feather
            size={25}
            name={secure ? 'eye' : 'eye-off'}
            color={'#000000'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(PrimaryInput);
const styles = StyleSheet.create({
  Container: {
    borderWidth: 0.7,
    height: mvs(56),
    paddingTop: mvs(7),
    marginBottom: mvs(15),
    borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
  },
  textInput: {
    color: colors.black,
    textAlignVertical: 'center',
    height: mvs(40),
    fontSize: mvs(16),
    width: mvs(275),
  },
  labelStyle: {
    color: colors.primary,
  },
  PasswordIcon: {
    position: 'relative',
    alignSelf: 'center',
  },
});
