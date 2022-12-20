import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors, darkTheme} from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    padding: mvs(20),
    paddingTop: mvs(100),
  },
  button: {
    marginTop: mvs(100),
  },
  accountText: {
    // color:colors.primary,
    // alignSelf:'center',
    marginTop: mvs(20),
    paddingHorizontal: mvs(60),
  },
  remindMeBtn: {
    width: mvs(20),
    height: mvs(20),
    borderRadius: mvs(2),
    color: darkTheme.black,
    borderWidth: mvs(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rememberText: {
    fontSize: mvs(16),
    marginLeft: mvs(12),
    color: darkTheme.black,
  },
  forgotText: {
    fontSize: mvs(16),
    color: darkTheme.black,
  },
});
export default styles;
