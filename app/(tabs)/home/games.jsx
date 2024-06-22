import { View, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import Header from '../../../components/Header';
import GameScreen from '../../../screens/GameScreen';
import adminAuth from '../../../hoc/adminAuth';

const Games = () => {

    return (
        <>
            <GameScreen />
        </>
    );
    
};

export default Games;
