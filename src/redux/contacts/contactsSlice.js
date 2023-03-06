import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  contacts: [],
  isLoading: false,
  isLoadingAdd: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.contacts = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(addContact.pending, store => {
        // store.isLoading = true;
        store.isLoadingAdd = true;
      })
      .addCase(addContact.fulfilled, (store, { payload }) => {
        // store.isLoading = false;
        store.isLoadingAdd = false;
        store.contacts.push(payload);
      })
      .addCase(addContact.rejected, (store, { payload }) => {
        // store.isLoading = false;
        store.isLoadingAdd = false;
        store.error = payload;
      })
      .addCase(deleteContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const index = store.contacts.findIndex(item => item.id === payload);
        store.contacts.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default contactsSlice.reducer;
