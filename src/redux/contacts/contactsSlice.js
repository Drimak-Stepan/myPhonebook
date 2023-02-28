import { createSlice } from '@reduxjs/toolkit';

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

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAllContactsLoading]: store => {
      store.isLoading = true;
    },
    [fetchAllContactsSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.contacts = payload;
    },
    [fetchAllContactsError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [fetchAddContactLoading]: store => {
      store.isLoading = true;
    },
    [fetchAddContactSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.contacts.push(payload);
    },
    [fetchAddContactError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [fetchDeleteContactLoading]: store => {
      store.isLoading = true;
    },
    [fetchDeleteContactSuccess]: (store, { payload }) => {
      store.isLoading = false;
      const index = store.contacts.findIndex(item => item.id === payload);
      store.contacts.splice(index, 1);
    },
    [fetchDeleteContactError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;
