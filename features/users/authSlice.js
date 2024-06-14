// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      if (action.payload === 'admin' || action.payload === 'user') {
          state.isLoggedIn = true;
          state.role = action.payload;
      } else {
          console.error('Invalid role');
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.role = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
