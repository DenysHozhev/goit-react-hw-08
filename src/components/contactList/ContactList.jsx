import { useSelector } from "react-redux";

import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  console.log("contacts:", contacts);
  console.log("тип contacts:", typeof contacts);

  return (
    <ul className={css.container}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
