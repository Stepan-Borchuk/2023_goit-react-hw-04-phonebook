import { Filter } from 'Contacts/Filter/Filter';
import { ContactListItem } from './ContactItem';
import { ContactsTitle, List } from './ContactList.styled';
import { Component } from 'react';

class ContactList extends Component {
  state = {
    filter: '',
  };

  onFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  getFilteredContactsList = () => {
    const contactsInfo = this.props.contactsInfo;
    const normalizedFilter = this.state.filter.toLowerCase();
    return contactsInfo.filter(({name}) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const newContacts = this.getFilteredContactsList();
    return (
      <div>
        <ContactsTitle>Contacts list</ContactsTitle>
        <Filter filter={this.state.filter} onFilter={this.onFilter} />

        <List>
          {newContacts.map(item => (
            <ContactListItem
              item={item}
              key={item.id}
              deleteContact={this.props.deleteContact}
            />
          ))}
        </List>
      </div>
    );
  }
}

export default ContactList;
