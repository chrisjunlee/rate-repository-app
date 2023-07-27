import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import appTheme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    height: appTheme.input.inputHeight,
    borderWidth: 1,
    borderColor: appTheme.colors.secondaryLight,
    marginTop: 10,
    padding: 10,
    fontSize: appTheme.textProperties.defaultSize,
    borderRadius: 5
  },
  errorBorder: {
    borderColor: appTheme.colors.error,
    borderWidth: 4
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.textInput];

  if(error) {
    textInputStyle.push(styles.errorBorder)
  }

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;