import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isLoggedIn, isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const login = (user) => {
    dispatch(login(user));
  };

  const logout = () => {
    dispatch(logout());
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
