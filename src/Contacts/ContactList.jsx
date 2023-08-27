import { Filter } from 'Contacts/Filter/Filter';
import { ContactListItem } from './ContactItem';
import { ContactsTitle, List } from './ContactList.styled'
import { Component } from 'react';


class ContactList extends Component {

  state = {
    filter: ''
  }

  onFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  render() {
    const contactsInfo = this.props.contactsInfo;
     const normalizedFilter = this.state.filter.toLowerCase();
     const newContacts = contactsInfo.filter(person =>
       person.name.toLowerCase().includes(normalizedFilter)
     );
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

export default ContactList
