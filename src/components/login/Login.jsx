import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, action) => {
    dispatch(
      login({
        email: value.email,
        password: value.password,
      })
    );
    action.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;
