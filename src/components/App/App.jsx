import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import s from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div>
      <h1 className={s}>Phone book</h1>

      <ContactForm />
      {!isLoading && <SearchBox />}
      {isLoading && <h1>Loading....</h1>}
      <ContactList />
    </div>
  );
};

export default App;
