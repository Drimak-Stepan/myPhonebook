import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { Container, Title, SubTitle } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filters, setFilters] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
