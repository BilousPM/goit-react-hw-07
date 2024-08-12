import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import s from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className={s}>Phone book</h1>

      <ContactForm />
      {!isLoading && <SearchBox />}
      {isLoading && <h1>Loading....</h1>}
      <ContactList />
      {isError && <h2>{`Adding contact is not possible... ${isError}`}</h2>}
    </div>
  );
};

export default App;
