import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [navigate, isLoggedIn]);

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
      <Form className={css.container}>
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <ErrorMessage
          name="email"
          component="div"
          className={css.errorMessage}
        />
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" />
        <ErrorMessage
          name="password"
          component="div"
          className={css.errorMessage}
        />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;
