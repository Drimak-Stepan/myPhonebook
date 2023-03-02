import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://63fe35d1571200b7b7c7604e.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const plusContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
