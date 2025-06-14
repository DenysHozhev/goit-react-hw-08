import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (IsLoggedIn) {
      navigate("/contacts");
    }
  }, [navigate, IsLoggedIn]);
  const handleSubmit = (values, actions) => {
    dispatch(
      registration({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
