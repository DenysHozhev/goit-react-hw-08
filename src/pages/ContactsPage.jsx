import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/contactForm/ContactForm";
import ContactList from "../components/contactList/ContactList";
import SearchBox from "../components/searchBox/SearchBox";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <div>
      <h2>Your contacts</h2>
      {isLoggedIn && (
        <>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default ContactsPage;
