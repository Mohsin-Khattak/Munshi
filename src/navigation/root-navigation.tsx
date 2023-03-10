// In App.js in a new project
import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Login from '../screens/login';
import Splash from '../screens/splash';
import RootStackParamList from '../types/navigation-types/root-stack';
import {horizontalAnimation} from '../utils';
import SignupCcNo from './../screens/signup/signup-cc-no';
import SignupEmail from './../screens/signup/signup-email';
import SignupName from './../screens/signup/signup-name';
import SignupNoEmployees from './../screens/signup/signup-no-employees';
import SignupPassword from './../screens/signup/signup-password';
import SignupPhone from './../screens/signup/signup-phone';
import TabNavigator from './tab-navigation';
import ForgetPassword from './../screens/forget-password/index';
const Stack = createNativeStackNavigator<RootStackParamList>();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export const RootNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={'#ffffff'}
        barStyle={Platform?.OS === 'ios' ? 'default' : 'dark-content'}
      />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={horizontalAnimation}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignupName" component={SignupName} />
        <Stack.Screen name="SignupCcNo" component={SignupCcNo} />
        <Stack.Screen name="SignupEmail" component={SignupEmail} />
        <Stack.Screen name="SignupNoEmployees" component={SignupNoEmployees} />
        <Stack.Screen name="SignupPassword" component={SignupPassword} />
        <Stack.Screen name="SignupPhone" component={SignupPhone} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="BottomTab" component={TabNavigator} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
