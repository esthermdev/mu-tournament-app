import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const login = (userRole) => {
    dispatch(login(userRole));
  };

  const logout = () => {
    dispatch(logout());
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
