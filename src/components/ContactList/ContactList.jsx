import { useDispatch, useSelector } from 'react-redux';
// - selectError, selectFilteredContacts, selectIsLoading - селектори Redux, які вибирають помилку,
// - відфільтровані контакти та статус завантаження відповідно.
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { useEffect } from 'react';
import { Button, Item, List, Text, Spinner } from './ContactList.styled';
import { fetchContacts, deleteContact } from 'redux/operations'; // - відповідають за отримання контактів та видалення контакту.
import { GrPhone } from 'react-icons/gr'; // - іконка трубки телефона
// - компонент ContactList відповідає за відображення списку контактів.
export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  // - useEffect запускається при монтуванні компонента і викликає дію fetchContacts, щоб отримати список контактів.
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id)); //-видалення контакту за його ідентифікатором.
  };
  return (
    <>
      {isLoading && <Spinner />}
      {!filteredContacts?.length && !error && !isLoading && (
        <Text>No contacts found.</Text>
      )}
      {error && <Text>{error}</Text>}
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <GrPhone size={15} />
            <Text>
              {name}: {number}
            </Text>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};
