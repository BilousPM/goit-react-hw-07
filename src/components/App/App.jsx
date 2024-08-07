import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import s from './App.module.css';

const App = () => {
  return (
    <div>
      <h1 className={s}>Phone book</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
