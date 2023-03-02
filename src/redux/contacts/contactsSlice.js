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
  extraReducers: builder => {
    builder
      .addCase(fetchAllContactsLoading, store => {
        store.isLoading = true;
      })
      .addCase(fetchAllContactsSuccess, (store, { payload }) => {
        store.isLoading = false;
        store.contacts = payload;
      })
      .addCase(fetchAllContactsError, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchAddContactLoading, store => {
        store.isLoading = true;
      })
      .addCase(fetchAddContactSuccess, (store, { payload }) => {
        store.isLoading = false;
        store.contacts.push(payload);
      })
      .addCase(fetchAddContactError, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContactLoading, store => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteContactSuccess, (store, { payload }) => {
        store.isLoading = false;
        const index = store.contacts.findIndex(item => item.id === payload);
        store.contacts.splice(index, 1);
      })
      .addCase(fetchDeleteContactError, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default contactsSlice.reducer;
