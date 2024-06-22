import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Alert } from 'react-native';
import { router } from 'expo-router';

const adminAuth = (Component, requiredRole = null) => {
    return (props) => {
        const { isLoggedIn, isAdmin } = useAuth();
        console.log(isAdmin);

        // Login message for non-admin users
        if (!isLoggedIn && !isAdmin) {
            Alert.alert(`You need to be a ${requiredRole} to access this feature`);
            router.back();
        }

        return <Component {...props} />;
    };
};

export default adminAuth;
