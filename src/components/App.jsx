import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectError, selectLoading } from "../redux/contacts/slice";
import { lazy, useEffect } from "react";
import { RegistrationPage } from "../pages/registrationPage";
import { Route, Routes } from "react-router-dom";
import Logout from "./logout/Logout";

const ContactForm = lazy(() => import("./contactForm/ContactForm"));
const ContactList = lazy(() => import("./contactList/ContactList"));
const SearchBox = lazy(() => import("./searchBox/SearchBox"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Layout = lazy(() => import("./layout/Layout"));

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return (
    <div className="main">
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/regoster" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Logout />

      {isLoading && !error && <strong>Loading contacts? please wait...</strong>}
    </div>
  );
}

export default App;
