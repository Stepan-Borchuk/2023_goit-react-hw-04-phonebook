import { ContactsItem, Text, DeleteButton } from './ContactItem.styled';
import PropTypes from 'prop-types';

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

ContactListItem.propTypes = {
  deleteContact: PropTypes.func,
  item: PropTypes.objectOf(PropTypes.string),
};
