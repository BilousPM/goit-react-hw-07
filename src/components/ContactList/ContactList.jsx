import { selectContacts } from '../../redux/contacts/selectors';
import { selectNameFilter } from '../../redux/filters/selectors';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const data = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);

  const filtredContact = data.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase()),
  );

  return (
    <div className={s.wrapper}>
      {filtredContact.length ? (
        filtredContact.map(contact => (
          <Contact key={contact.id} contact={contact} id={contact.id} />
        ))
      ) : (
        <h1>No Contacts in your phone book</h1>
      )}
    </div>
  );
};

export default ContactList;
