import {Task} from '../entities-types';

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Login: undefined;
  SignupCcNo: undefined;
  SignupEmail: undefined;
  SignupName: undefined;
  SignupNoEmployees: undefined;
  SignupPassword: undefined;
  SignupPhone: undefined;

  AddTask: Task | undefined;
  BottomTab: undefined;
};
export default RootStackParamList;
