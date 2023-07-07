// - useDispatch - хук дозволяє викликати дії Redux ,
// - useSelector - хук дозволяє вибирати певні частини стану зі сховища Redux.
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations'; // - дія (action) Redux-додає контакт.
import { selectContacts } from 'redux/selectors'; // - селектор Redux - вибирає список контактів.
import { toast } from 'react-toastify'; // - відображення сповіщень.
import { nanoid } from '@reduxjs/toolkit'; // - функція  генерує унікальні ідентифікатори.
// - компоненти (styled)-відповідають за форму, введення, мітку і кнопку відправки
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';

export const ContactForm = () => {
  // -ContactForm - представляє форму для додавання контактів.
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); // - доступ до стору
  // -nameInputId та numberInputId - унікальні ідентифікатори для елементів введення.
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault(); // -Запобігається перезавантаження сторінки.
    // - Створюється об'єкт contact з введеними значеннями для поля name та number.
    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };
    // -Перевіряється, чи існує контакт з таким самим ім'ям у списку контактів.
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    // -Якщо так, виводиться сповіщення про існуючий контакт.
    if (isExist) {
      return toast.warn(`${contact.name} is already in contacts.`);
    }
    // -Викликається дія addContact з переданим об'єктом contact для додавання контакту до стану Redux.
    dispatch(addContact(contact));
    event.currentTarget.reset(); // - Форма очищається, скидаючи значення введених полів.
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nameInputId}
          required
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={numberInputId}
          required
        />
      </Label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
