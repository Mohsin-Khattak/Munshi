import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors, darkTheme} from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  label: {
    paddingHorizontal: mvs(20),
    paddingBottom: mvs(26),
  },
  contentContainerStyle: {
    paddingHorizontal: mvs(20),
    flexGrow: 1,
  },
  button: {
    marginTop: mvs(100),
  },
  accountText: {
    // alignSelf:'center',
    marginTop: mvs(20),
    paddingHorizontal: mvs(60),
  },
  remindMeBtn: {
    width: mvs(20),
    height: mvs(20),
    borderRadius: mvs(2),
    borderColor: darkTheme.white,
    borderWidth: mvs(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rememberText: {
    fontSize: mvs(16),
    marginLeft: mvs(12),
    color: darkTheme.white,
  },
  forgotText: {
    fontSize: mvs(16),
    color: darkTheme.white,
  },
  rememberMeContainer: {
    marginTop: mvs(24),
  },
});
export default styles;
