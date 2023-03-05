import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { isLoading } from 'redux/contacts/contactsSelectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoad = useSelector(isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <ContactForm />
      <div>{isLoad && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
