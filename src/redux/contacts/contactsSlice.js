import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  contacts: [],
  isLoading: false,
  events: null,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.isLoading = true;
        store.events = 'fetch';
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.contacts = payload;
        store.events = null;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
        store.events = null;
      })
      .addCase(addContact.pending, store => {
        store.isLoading = true;
        store.events = 'add';
      })
      .addCase(addContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.events = null;
        store.contacts.push(payload);
      })
      .addCase(addContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.events = null;
        store.error = payload;
      })
      .addCase(deleteContact.pending, (store, { meta }) => {
        store.isLoading = true;
        store.events = `${meta.arg}`;
      })
      .addCase(deleteContact.fulfilled, (store, { meta }) => {
        store.isLoading = false;
        store.error = null;
        store.events = null;
        const index = store.contacts.findIndex(item => item.id === meta.arg);
        store.contacts.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
        store.events = null;
      });
  },
});

export default contactsSlice.reducer;
