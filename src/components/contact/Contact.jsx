import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import css from "./Contact.module.css";
import { deleteContact, editContact } from "../../redux/contacts/operations";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleEdit = () => {
    dispatch(editContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.list}>
        <p>
          <IoMdContact /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Contact;
