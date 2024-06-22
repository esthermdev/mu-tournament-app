// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
  isAdmin: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      if (action.payload === 'admin') {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isAdmin = true;
      } else if (action.payload) {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isAdmin = false;
      } else {
        state.isLoggedIn = false;
        state.isAdmin = false;
      }

      console.log('user: ', state.user);
      console.log('logged in: ', state.isLoggedIn);
      console.log('admin: ', state.isAdmin); 
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.isAdmin = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
