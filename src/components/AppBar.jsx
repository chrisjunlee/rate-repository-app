import { View, StyleSheet, Text, Pressable} from 'react-native';
import Constants from 'expo-constants';
import appTheme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: appTheme.colors.primary,
    fontWeight: 700,
    height: 70
  },
});

const onPressFunction = () => {}

const AppBar = () => {
  return (
  <View style={styles.container}>
    <Pressable onPress={onPressFunction}>
      <Text>Repositories</Text>
    </Pressable>
  </View>
  );
};

const AppBarTab = ({ title, target }) => {
  return (
    <TouchableWithoutFeedback>
      <Link to={ target } component={ TouchableOpacity }>
        <Heading contrast={ true } style={ appBarStyle.appBarTab }>
          { title }
        </Heading>
      </Link>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;