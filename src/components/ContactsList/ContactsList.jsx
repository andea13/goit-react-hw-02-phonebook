import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { ContactList } from './ContactsList.styled';
export const ContactsList = ({ contacts, handleDeleteClick }) => {
  console.log(contacts);
  return (
    <ContactList>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem
          name={name}
          number={number}
          key={id}
          id={id}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </ContactList>
  );
};
