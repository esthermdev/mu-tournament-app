import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Alert } from 'react-native';
import { router } from 'expo-router';

const userAuth = (Component, requiredRole = null) => {
    return (props) => {
        const { isLoggedIn } = useAuth();

        // Login message for users
        if (!isLoggedIn) {
            Alert.alert('Please login to use this feature');
            router.back();
        }

        return <Component {...props} />;
    };
};

export default userAuth;
