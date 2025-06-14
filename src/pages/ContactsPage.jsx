import { useSelector } from "react-redux";
import ContactForm from "../components/contactForm/ContactForm";
import ContactList from "../components/contactList/ContactList";
import SearchBox from "../components/searchBox/SearchBox";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const ContactsPage = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <h2>Your contacts</h2>
      {IsLoggedIn && (
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
