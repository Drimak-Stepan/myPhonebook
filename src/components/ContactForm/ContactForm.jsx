import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { getFilteredContacts, events } from 'redux/contacts/contactsSelectors';

import AddLoader from '../Loader/AddLoader';
import toast from 'react-hot-toast';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const isAdd = useSelector(events);
  const list = useSelector(getFilteredContacts);

  const isDublicate = () => {
    const normalizedName = name.toLowerCase();
    const result = list.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });
    if (result && number) {
      toast(`Name: ${name} is already exist`, {
        style: { color: '#1976d2' },
      });
      return;
    }
    dispatch(addContact({ name, number }));

    if (name && number) {
      toast('Contact add', { style: { color: 'green' } });
      setName('');
      setNumber('');
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
    isDublicate();
  };

  return (
    <>
      <Box
        component="form"
        marginBottom={2}
        border={4}
        borderColor="#9cb0b3"
        borderRadius={4}
        noValidate
        position="relative"
        onSubmit={handelSubmit}
        sx={{ mt: 1 }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 320,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <TextField
            margin="normal"
            required
            id="name"
            label="Name"
            type="text"
            name="name"
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="name"
          />
          <TextField
            margin="normal"
            required
            type="tel"
            name="number"
            id="number"
            label="Number"
            fullWidth
            value={number}
            onChange={e => setNumber(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 3 }}>
            {isAdd === 'add' && name && number ? <AddLoader /> : 'ADD CONTACT'}
          </Button>
        </div>
      </Box>
    </>
  );
};

export default ContactForm;
