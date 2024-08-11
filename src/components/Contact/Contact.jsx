import { FaRegUser, FaPhone } from 'react-icons/fa';

import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/contactsSlice';
import { deleteContactThunk } from '../../redux/contacts/operations';

const Contact = ({ contact, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <FaRegUser className={s.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={s.icon} />
          {contact.number}
        </p>
      </div>
      <button onClick={() => handleDelete()} type="button" className={s.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
