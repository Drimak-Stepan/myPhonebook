import { getAllContacts, addContact } from 'services/contactsApi';

import {
  fetchAllContactsError,
  fetchAllContactsLoading,
  fetchAllContactsSuccess,
  fetchAddContactError,
  fetchAddContactLoading,
  fetchAddContactSuccess,
  fetchDeleteContactError,
  fetchDeleteContactLoading,
  fetchDeleteContactSuccess,
} from './contactsActions';

export const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchAllContactsLoading());
      const data = await getAllContacts();
      dispatch(fetchAllContactsSuccess(data));
    } catch ({ response }) {
      dispatch(fetchAllContactsError(response.data.message));
    }
  };
  return func;
};

export const fetchAddBook = data => {
  const func = async dispatch => {
    try {
      dispatch(fetchAddContactLoading());
      const result = await addContact(data);
      dispatch(fetchAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(fetchAddContactError(response.data.message));
    }
  };
  return func;
};

export const fetchDeleteBook = id => {
  const func = async dispatch => {
    try {
      dispatch(fetchDeleteContactLoading());
      await addContact();
      dispatch(fetchDeleteContactSuccess(id));
    } catch ({ response }) {
      dispatch(fetchDeleteContactError(response.data.message));
    }
  };
  return func;
};
