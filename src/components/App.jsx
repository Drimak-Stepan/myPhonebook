import { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { Container, Title, SubTitle } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filters, setFilters] = useState('');

  const addContact = ({ name, number }) => {
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts.`)
      : setContacts(prevContacts => {
          const contact = {
            id: nanoid(),
            name,
            number,
          };
          return [contact, ...prevContacts];
        });
  };

  const visibleContacts = () => {
    const normalizedFilter = filters.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />

      <SubTitle>Contacts</SubTitle>
      <Filter value={filters} onChange={e => setFilters(e.target.value)} />
      <ContactList
        contactsList={visibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};

export default App;

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts?.length) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts.length !== prevState.contacts.legth) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
