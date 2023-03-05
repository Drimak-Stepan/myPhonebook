import { createSlice } from '@reduxjs/toolkit';

import { signup, login, logout, current } from './authOperations';

const initialState = {
  user: {},
  isLogin: false,
  token: null,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: store => {
      store.isRefreshing = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, { payload }) => {
      store.isRefreshing = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [signup.rejected]: (store, { payload }) => {
      store.isRefreshing = false;
      store.error = payload;
    },
    [login.pending]: store => {
      store.isRefreshing = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.isRefreshing = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [login.rejected]: (store, { payload }) => {
      store.isRefreshing = false;
      store.error = payload;
    },
    [logout.pending]: store => {
      store.isRefreshing = true;
      store.error = null;
    },
    [logout.fulfilled]: store => {
      store.isRefreshing = false;
      store.user = {};
      store.token = null;
      store.isLogin = false;
    },
    [logout.rejected]: (store, { payload }) => {
      store.isRefreshing = false;
      store.error = payload;
    },
    [current.pending]: store => {
      store.isRefreshing = true;
      store.error = null;
    },
    [current.fulfilled]: (store, { payload }) => {
      store.isRefreshing = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [current.rejected]: (store, { payload }) => {
      store.isRefreshing = false;
      store.token = null;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
