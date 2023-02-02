import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Label, Input, Btn } from './ContactForm.styled';
import { nanoid } from 'nanoid';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handelSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <>
      <Form onSubmit={handelSubmit}>
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
        <Btn type="submit">Add contact</Btn>
      </Form>
    </>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
