import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
// import { getContacts, getFilter } from 'redux/selectors';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { useEffect } from 'react';
import { Button, Item, List, Text, Spinner } from './ContactList.styled';
import { fetchContacts, deleteContact } from 'redux/operations';
import { GrContactInfo } from 'react-icons/gr';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
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
            <GrContactInfo size={20} />
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
