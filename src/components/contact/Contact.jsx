// import { IoMdContact } from "react-icons/io";
// import { FaPhone } from "react-icons/fa6";
// import { useDispatch } from "react-redux";

// import css from "./Contact.module.css";
// import { deleteContact, editContact } from "../../redux/contacts/operations";

// const Contact = ({ contact: { id, name, number } }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteContact(id));
//   };

//   const handleEdit = () => {
//     dispatch(editContact(id));
//   };

//   return (
//     <div className={css.container}>
//       <div className={css.list}>
//         <p>
//           <IoMdContact /> {name}
//         </p>
//         <p>
//           <FaPhone /> {number}
//         </p>
//       </div>
//       <button onClick={handleDelete}>Delete</button>
//       <button onClick={handleEdit}>Edit</button>
//     </div>
//   );
// };

// export default Contact;

import { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import css from "./Contact.module.css";
import { deleteContact, editContact } from "../../redux/contacts/operations";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditName(name);
    setEditNumber(number);
  };

  const handleSave = () => {
    const updatedData = {
      name: editName,
      number: editNumber,
    };

    dispatch(editContact({ contactID: id, Data: updatedData }));
    setIsEditing(false);
  };

  return (
    <div className={css.container}>
      <div className={css.list}>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <input
              type="text"
              value={editNumber}
              onChange={(e) => setEditNumber(e.target.value)}
            />
          </>
        ) : (
          <>
            <p>
              <IoMdContact /> {name}
            </p>
            <p>
              <FaPhone /> {number}
            </p>
          </>
        )}
      </div>

      {isEditing ? (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Contact;
