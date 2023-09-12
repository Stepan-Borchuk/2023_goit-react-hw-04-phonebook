import Form from 'Form/Form';
import { Box } from './Box';
import { useLocalStorage } from 'useLocalStorage';
import ContactList from './Contacts/ContactList';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';



const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);

  const submitForm = (values, { resetForm }) => {
    const oldContact = contacts.find(
      person => person.name.toLowerCase() === values.name.toLowerCase()
    );

    if (oldContact) {
      alert(` ${values.name} is already in contacts.`);
      return;
    }

    const person = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    setContacts(prevState => [person, ...prevState]);

    resetForm();
  };

  const onDelete = id => {
    setContacts(prevState => prevState.filter(c => c.id !== id));
  };

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
      <Form submitForm={submitForm} />

      {contacts.length > 0 && (
        <ContactList contactsInfo={contacts} deleteContact={onDelete} />
      )}
    </Box>
  );
};

export default App;

ContactList.propTypes = {
  contactsInfo: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
  submitForm: PropTypes.func,
};
