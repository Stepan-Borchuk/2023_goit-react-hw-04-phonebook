import { Filter } from 'Contacts/Filter/Filter';
import { ContactListItem } from './ContactItem';
import { ContactsTitle, List } from './ContactList.styled';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contactsInfo, deleteContact }) => {
  const [filter, setFilter] = useState('');

  const onFilter = evt => {
    setFilter(evt.target.value);
  };

  const newContacts = useMemo(() => {
    return contactsInfo.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contactsInfo, filter]);

  return (
    <div>
      <ContactsTitle>Contacts list</ContactsTitle>
      <Filter filter={filter} onFilter={onFilter} />

      <List>
        {newContacts?.map(item => (
          <ContactListItem
            item={item}
            key={item.id}
            deleteContact={deleteContact}
          />
        ))}
      </List>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  newContacts: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
};
