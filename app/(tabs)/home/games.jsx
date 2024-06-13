import { View, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import Header from '../../../components/Header';
import GameScreen from '../../../screens/GameScreen';

const Games = () => {

    return (
        <>
            <Header 
                title='Games'
                handlePress={() => router.back()}
                backTitle='Home'
            />
            <GameScreen />
        </>
    );
    
};

const styles = StyleSheet.create({});

export default Games;
