import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  getFilteredContacts,
  isLoadingAdd,
} from 'redux/contacts/contactsSelectors';
import { Form, Label, Input, Btn } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import AddLoader from '../Loader/AddLoader';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const isAdd = useSelector(isLoadingAdd);
  const list = useSelector(getFilteredContacts);

  const handelChangeNumber = e => {
    setNumber(e.target.value);
  };

  const isDublicate = () => {
    const normalizedName = name.toLowerCase();
    const result = list.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });
    if (result) {
      toast(`Name: ${name} is already exist`, {
        style: { color: '#1976d2' },
      });
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    toast('Contact add', { style: { color: 'green' } });
  };

  const handelSubmit = e => {
    e.preventDefault();
    isDublicate();
  };

  const nameId = useMemo(() => nanoid(), []);
  const numberId = useMemo(() => nanoid(), []);

  return (
    <>
      <Form onSubmit={handelSubmit}>
        <div>
          <Label htmlFor={nameId}>Name</Label>
          <div>
            <Input
              type="text"
              name="name"
              id={nameId}
              value={name}
              onChange={e => setName(e.target.value)}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <Label htmlFor={numberId}>Number</Label>
          <div>
            <Input
              type="tel"
              name="number"
              id={numberId}
              value={number}
              onChange={handelChangeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>

          <Btn type="submit">{isAdd ? <AddLoader /> : 'ADD CONTACT'}</Btn>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;
