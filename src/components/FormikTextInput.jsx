import { StyleSheet } from 'react-native';
import { useFormikContext, useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import appTheme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: appTheme.colors.error,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props} />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;