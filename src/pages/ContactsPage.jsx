import ContactForm from "../components/contactForm/ContactForm";
import ContactList from "../components/contactList/ContactList";
import SearchBox from "../components/searchBox/SearchBox";

const ContactsPage = () => {
  return (
    <div>
      <h2>Your contacts</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
