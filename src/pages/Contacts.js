import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export default function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook List</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
