import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectError, selectLoading } from "../redux/contacts/slice";
import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { refreshUser } from "../redux/auth/operations";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Layout = lazy(() => import("./layout/Layout"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const PrivateRoute = lazy(() => import("./privateRoute/PrivateRoute"));

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading user data...</div>;
  }

  return (
    <div className="main">
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {isLoading && !error && <strong>Loading contacts? please wait...</strong>}
    </div>
  );
}

export default App;
