import { View, StyleSheet, Text, Pressable, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import appTheme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: appTheme.colors.primary,
    fontWeight: 700,
    height: 100
  },
  scrollView: {
    flexGrow: 1
  },
  appBarTab: {
    display: 'flex',
    flexDirection: 'row',
    margin: 3,
    justifyContent: 'space-evenly',
    fontSize: appTheme.textProperties.headingSize,
    boxShadow: '0px 0px 4px' + appTheme.colors.primaryLight,
    margin: 4,
    padding: 10
  }
});

const AppBarTab = ({title, target}) => {
  return (
    <Pressable>
      <Link to={target} >
        <Text style={styles.appBarTab}>
          {title}
        </Text>
      </Link>
    </Pressable>
  )
}

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal style={styles.scrollView}>
      <AppBarTab title="Repositories" target="/" />
      <AppBarTab title="Sign In" target="/signin" />
      <AppBarTab title="Sign Up" target="/signup" />
    </ScrollView>
  </View>
  );
};

export default AppBar;