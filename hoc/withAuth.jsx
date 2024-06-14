import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Alert } from 'react-native';
import { router } from 'expo-router';

const withAuth = (Component, requiredRole = null) => {
    return (props) => {
        const { isLoggedIn, role } = useAuth();

        // Login message for users
        if (!isLoggedIn) {
            Alert.alert('Please login to use this feature');
            router.back();
        }

        // Login message for non-admin users
        // if (requiredRole && role !== requiredRole) {
        //     Alert.alert(`You need to be an ${requiredRole} to access this feature`);
        //     router.back();
        // }

        return <Component {...props} />;
    };
};

export default withAuth;
