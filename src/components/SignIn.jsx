import { Pressable, Text, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import * as yup from 'yup';

const onSubmit = (values) => { console.log(values); };

const initialValues = {
  username: '',
  password: '',
};

const signInValidationSchema = yup.object().shape({
  username: yup.string().trim().required('Username is required.'),
  password: yup.string().trim().required('Password is required.')
});

const SignIn = () => (
  <View>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={signInValidationSchema}>
      <View>
        <FormikTextInput name="username" placeholder="username"/>
        <FormikTextInput name="password" placeholder="password"/>
        <Pressable onPress={onSubmit}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </Formik>
  </View>)

export default SignIn;