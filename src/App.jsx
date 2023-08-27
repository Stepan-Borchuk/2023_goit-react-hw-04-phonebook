import Form from 'Form/Form';
import { Box } from './Box';
import React, { Component } from 'react';
import ContactList from './Contacts/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitHandler = d => {
    const oldContact = this.state.contacts.find(
      person => person.name.toLowerCase() === d.name.toLowerCase()
    );

    if (oldContact) {
      alert(` ${d.name} is already in contacts.`);
      return;
    }
    // console.log(d);
    const person = {
      id: d.id,
      name: d.name,
      number: d.number,
    };

    this.setState(prevState => {
      return {
        contacts: [person, ...prevState.contacts],
      };
    });
  };

  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(c => c.id !== id),
      };
    });
  };

  render() {
    return (
      <Box
        as="div"
        width="30%"
        display="flex"
        alignItems="center"
        justifyContent="left"
        flexDirection="column"
        color="accent"
        mt="3"
        ml="auto"
        mr="auto"
        bg="background"
        borderRadius="normal"
        boxShadow="4px 11px 49px 1px #d7dead"
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />

        {this.state.contacts.length > 0 && (
          <ContactList
            contactsInfo={this.state.contacts}
            deleteContact={this.onDelete}
          />
        )}
      </Box>
    );
  }
}

export default App;
