import { ContactsItem, Text, DeleteButton } from './ContactItem.styled';

export const ContactListItem = ({ item, deleteContact }) => {
  return (
    <ContactsItem>
      <Text>
        {item.name}: {item.number}
      </Text>
      <DeleteButton type="button" onClick={() => deleteContact(item.id)}>
        Delete
      </DeleteButton>
    </ContactsItem>
  );
};
