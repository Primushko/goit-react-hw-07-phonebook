import { ToastContainer } from 'react-toastify'; // -відповідає за відображення сповіщень у додатку.
import 'react-toastify/dist/ReactToastify.css'; // -встановлює зовнішній вигляд сповіщень.
import { ContactForm } from './ContactForm/ContactForm'; // - компонент форми для додавання контактів.
import { ContactList } from './ContactList/ContactList'; // - компонент для відображення списку контактів.
import { Filter } from './Filter/Filter'; // - компонент для фільтрації контактів.
import { MainHeader, SecondaryHeader, Section } from './App.styled'; // - компоненти стилізованого (styled) компонента App,

export const App = () => {
  return (
    <Section>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <SecondaryHeader>Contacts</SecondaryHeader>
      <Filter />
      <ContactList />
      {/* вспливаючі повідомлення */}
      <ToastContainer position="top-center" />
    </Section>
  );
};
