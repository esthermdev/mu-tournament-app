import { useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Button, Input, Icon } from '@rneui/base';
import { login, logout } from '../../features/users/authSlice';
import { useDispatch } from 'react-redux';

const LoginScreen = () => {
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const handleLogin = async () => {
        dispatch(login(email));
    };

    const handleLogout = () => {
        dispatch(logout());
        console.log('you are successfully logged out!');
    }

    return (
        <View style={styles.container}>
            <Input 
                placeholder='Email'
                leftIcon={{ type: 'font-awesome', name: 'user-o'}}
                onChangeText={setEmail}
                value={email}
                autoCapitalize='none'
                containerStyle={styles.formInput}
                leftIconContainerStyle={styles.formIcon}
            />
            <View style={styles.formButton}>
                <Button 
                    onPress={handleLogin}
                    title='Login'
                    color='#DB3228'
                    icon={
                        <Icon 
                            name='sign-in'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    buttonStyle={{ backgroundColor: '#DB3228' }}
                />
            </View>
            <Button 
                onPress={() => handleLogout()}
                title='Logout'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        marginVertical: 'auto'
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 8,
        height: 60
    },
    formCheckbox: {
        margin: 8,
        backgroundColor: null
    },
    formButton: {
        margin: 20,
        marginRight: 40,
        marginLeft: 40
    },
    tabBar: {
        backgroundColor: 'blue',
        height: 60
    }
});

export default LoginScreen;